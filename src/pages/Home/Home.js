import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="max-w-screen-xl   mx-auto p-4">
      <p>this is home</p>
      <Products></Products>
    </div>
  );
};

export default Home;
