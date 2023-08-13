import React, { useEffect, useState } from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import getProducts from "../../utilities/useGetProducts";
import useGetProducts from "../../utilities/useGetProducts";

const Products = () => {
  const [products, setProdcuts] = useState([]);
  useGetProducts(setProdcuts);
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-y-8 ">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
