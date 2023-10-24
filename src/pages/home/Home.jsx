import "../../styles/home.css";
import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [formErr, formResponse] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [name, setName] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        "https://gaming-7c67.onrender.com/api/v1"
      );
      const username = response.data.allUsers.map((user) => user.name);
      //   console.log(username);
      setName(username);
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit();
  console.log(name);
  return (
    <>
      {/* <form className="">
        <input
          className="main"
          type="text"
          name="fullName"
          onChange={handleChange}
        ></input>
        <input
          className="main"
          type="email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          className="main"
          type="password"
          name="password"
          onChange={handleChange}
        ></input>
        <input
          className="main"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        ></input>
        <br />

        <span className="">{formErr}</span>
        <br />
        <button type="submit">submit</button>
      </form> */}
      <ul>
      {name.map((user)=> (
        <li>{user}</li>
      ))}
       
      </ul>
    </>
  );
};

export default Home;
