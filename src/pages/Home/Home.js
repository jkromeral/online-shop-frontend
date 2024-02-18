import React from "react";
import Images from "../../components/Images/Images";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Images />
      <div className="homecon">
        <div className="design top"></div>
        <div className="design mid"></div>
        <div className="design bot"></div>
      </div>
    </div>
  );
};

export default Home;
