import React, { useEffect } from "react";
import Images from "../../components/Images/Images";
import "./Home.css";
import CarouselList from "../../components/Carousel/CarouselList";

const Home = ({ setProducts, products }) => {
  useEffect(() => {
    fetch(`http://localhost:3001/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div id="home">
      <Images />
      <CarouselList products={products} />
    </div>
  );
};

export default Home;
