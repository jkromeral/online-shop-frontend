import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import login_image from "../../assets/login_image.png";
import "./Login.css";

const Login = ({ onEnterChange, onUserChange, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = () => {
    if (username !== "" && password !== "") {
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0].username === username) {
            onEnterChange(true);
            onUserChange(username);
          } else {
            setMessage(data);
          }
        });
    } else {
      setMessage("Please enter your username and password");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div id="login">
      <div className="login-img">
        <img src={login_image} alt="login image" />
      </div>
      <div className="login-con">
        <input
          type="text"
          placeholder="Enter Username"
          className={message && "input-border"}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          className={message && "input-border"}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={onLogin}>
          Login
        </button>
        <div className="message-con">
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
