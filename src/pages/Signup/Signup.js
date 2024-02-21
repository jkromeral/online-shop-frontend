import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import signup_image from "../../assets/signup_image.png";
import "./Signup.css";

const Signup = ({ onEnterChange, onUserChange, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // to enable user to register

  const onSignup = () => {
    if (
      username !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      mobileNumber !== "" &&
      password !== ""
    ) {
      fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          first_name: firstName,
          last_name: lastName,
          mobile_number: mobileNumber,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          onEnterChange(true);
          onUserChange(username);
        });
    } else {
      setMessage("Unable to Register");
    }
  };

  // when incorrect or invalid input, display message for 5 sec

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  // when registered, navigate to home page

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div id="signup">
      <div className="signup-img">
        <img src={signup_image} alt="signup image" />
      </div>
      <div className="signup-con">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          className={message && "input-border"}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          className={message && "input-border"}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          className={message && "input-border"}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <input
          type="number"
          name="mobileNumber"
          placeholder="Enter Mobile Number"
          className={message && "input-border"}
          onChange={(event) => setMobileNumber(event.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className={message && "input-border"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button
          className="btn btn-warning text-white"
          type="submit"
          value="Sign Up"
          onClick={onSignup}
        >
          Sign Up
        </button>
        <div className="message-con">
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
