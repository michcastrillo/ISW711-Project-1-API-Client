import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const inicialCate = {
  name: "",
};
const CategoriesSave = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(sessionStorage.getItem("userConect")); //Get id user connect
  const tokenValue = JSON.parse(sessionStorage.getItem("loginToken")); // token
  const categoryId = JSON.parse(sessionStorage.getItem("loginToken")); // Get category id
  const [category, setCategory] = useState(inicialCate);
  const [err, setErr] = useState({});

  const handleInput = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = validateForm(category);
    if (Object.keys(errors).length === 0) {
      const url = "http://localhost:4000/api/categories/";
      const data = {
        name: category.name,
      };
      console.log(data);
      const config = {
        headers: { Authorization: `Bearer ${tokenValue}` },
      };
      axios
        .post(url, data, config)
        .then((res) => {
          console.log(res.data);
          navigate("/categories");
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.status);
            if (err.response.status === 403) {
              //sin permisos
              navigate("/home");
            } else if (err.response.status === 401) {
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
    } else {
      setErr(errors);
      console.log(errors);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/categories");
  };
  const validateForm = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    return errors;
  };

  return (
    <div class="container">
      <Header />
      <h2>Categories</h2>
      <p>-----------------------------------</p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleInput}
        required
      />
      {err.name && <div>{err.name}</div>}
      <p>-----------------------------------</p>
      <button id="b_buscador" onClick={handleSave}>
        Save
      </button>
      <button id="b_buscador" onClick={handleCancel}>
        Cancel
      </button>
      <Footer />
    </div>
  );
};

export default CategoriesSave;
