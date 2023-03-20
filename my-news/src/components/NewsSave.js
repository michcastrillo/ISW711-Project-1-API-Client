import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const newInicial = {
  url: "",
  name: "",
};
const NewsSave = () => {
  const navigate = useNavigate();
  const tokenValue = JSON.parse(sessionStorage.getItem("loginToken"));
  const userId = JSON.parse(sessionStorage.getItem("userConect")); //Get id user connect

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [addNews, setAddNews] = useState(newInicial);
  const [err, setErr] = useState({});

  //Load categories
  useEffect(() => {
    const url = "http://localhost:4000/api/categories/";
    axios
      .get(url, { headers: { Authorization: `Bearer ${tokenValue}` } })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        if (error.response.status >= 400) setCategories([]);
      });
  }, []);

  //-------
  const handleInput = (e) => {
    setAddNews({
      ...addNews,
      [e.target.name]: e.target.value,
    });
  };

  //-------
  const handleSelect = (e) => {
    e.preventDefault();
    setCategoryId(e.target.dataset.id);
  };
  //-------
  const handleBtn = (e) => {
    e.preventDefault();
    const errors = validateForm(addNews);
    if (Object.keys(errors).length === 0) {
      const url = "http://localhost:4000/api/newsource/";
    const data = {
      url: addNews.url,
      name: addNews.name,
      categoryId: categoryId,
      userId,
    };
    console.log(data);
    const config = {
      headers: { Authorization: `Bearer ${tokenValue}` },
    };
    axios
      .post(url, data, config)
      .then((res) => {
        console.log(res.data.data._id);
        const idNewSource = res.data.data._id;
        addNew(idNewSource);
       })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
          if (err.response.status === 401) {
            navigate("/login");
          } else {
            console.log(err.response.data.message);
          }
        } else if (err.request) {
          console.log("Network error:", err.request);
        } else {
          console.log("Unexpected error:", err.message);
        }
      });
    }else{
      setErr(errors);
      console.log(errors);
    }
  };
  const addNew = (idNewSource) => {
    const tokenValue = JSON.parse(sessionStorage.getItem("loginToken"));
    const urlNew = `http://localhost:4000/api/newsource/${idNewSource}`;
        axios.post(urlNew, null, {
          headers: {
            "Authorization": `Bearer ${tokenValue}`
          }
        })
        .then((res)=> {
          console.log(res.status)
          navigate("/news-sources");
        })
        .catch((err)=> {
          console.log(err)
        })
  }
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/news-sources");
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.url) {
      errors.url = "Url is required";
    }
    if (!values.name) {
      errors.name = "Name is required";
    }
    return errors;
  };
  return (
    <div class="container">
      <Header />
      <h2>News source</h2>
      <p>-----------------------------------</p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleInput}
        required
      />
       {err.name && <div>{err.name}</div>}
      <br />
      <input
        type="text"
        placeholder="RSS URL"
        name="url"
        onChange={handleInput}
        required
      />
       {err.url && <div>{err.url}</div>}
      <br />
      <select key={Math.random() * 1000}>
        {categories.length ? (
          categories.map((ele) => (
            <option data-id={ele._id} onClick={handleSelect}>
              {ele.name}
            </option>
          ))
        ) : (
          <option>Category</option>
        )}
      </select>
      <p>-----------------------------------</p>
      <button id="b_buscador" onClick={handleBtn}>
        Add
      </button>
      <button id="b_buscador" onClick={handleCancel}>
        Cancel
      </button>
      <Footer />
    </div>
  );
};

export default NewsSave;
