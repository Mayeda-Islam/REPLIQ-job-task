import React, { useState } from "react";
import useGetProducts from "../../utilities/useGetProducts";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ProductDetails = () => {
  const [products, setProdcuts] = useState([]);
  const { productId } = useParams();
  useGetProducts(setProdcuts);
  const singleProductDetails = products.find(
    (product) => parseInt(product?.id) === parseInt(productId)
  );
  console.log(singleProductDetails);

  return (
    <div className="max-w-screen-xl h-screen flex justify-center items-center  mx-auto p-4">
      <div className="mt-20 p-32">
        <div
          // onSubmit={handlePlaceService}
          className="flex p-36 gap-6 lg:w-3/4  mx-auto bg-indigo-300 shadow-xl"
        >
          <div className="w-2/5">
            <img src={singleProductDetails?.img} alt="" />
          </div>
          <div className="items-start  w-3/5 text-white">
            <div className=" text-3xl">{singleProductDetails?.title}</div>

            <div className="text-cl font-medium">
              {singleProductDetails?.description}
            </div>
            <div className="text-2xl font-medium">
              Price :{singleProductDetails?.price}$
            </div>
            <div className="">
              <Link to={""}>
                <button className="btn bg-blue-400 p-2 rounded-sm my-2 ">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
