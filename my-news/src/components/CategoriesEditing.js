import React, { useEffect, useState } from "react";
import "../styles/categoriesEditing.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoriesEditing = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(sessionStorage.getItem("userConect")); //Get id user connect
  const tokenValue = JSON.parse(sessionStorage.getItem("loginToken")); // token
  const categoryId = JSON.parse(sessionStorage.getItem("idCategory")); // Get category id
  const [category, setCategory] = useState([]);
  const [err, setErr] = useState({});

  //Load data to edit
  useEffect(() => {
    const url = `http://localhost:4000/api/categories/${categoryId}`;
    const config = {
      headers: { Authorization: `Bearer ${tokenValue}` },
    };
    axios
      .get(url, config)
      .then((res) => {
        const dataSee = res.data.data;
        setCategory(dataSee);
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
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const errors = validateForm(category);
    if (Object.keys(errors).length === 0) {
      const url = `http://localhost:4000/api/categories/${categoryId}`;
      const data = {
        name: category.name,
      };
      console.log(data);
      const config = {
        headers: { Authorization: `Bearer ${tokenValue}` },
      };
      //---
      axios
        .put(url, data, config)
        .then((res) => {
          console.log(res.data);
          navigate("/categories");
        })
        .catch((err) => {
          console.log(err.response);
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
        value={category.name}
        onChange={handleInput}
        required
      />
      {err.name && <div>{err.name}</div>}
      <p>-----------------------------------</p>
      <button id="b_buscador" onClick={handleEdit}>
        Edit
      </button>
      <button id="b_buscador" onClick={handleCancel}>
        Cancel
      </button>
      <Footer />
    </div>
  );
};

export default CategoriesEditing;
