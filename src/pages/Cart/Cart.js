import React, { useState } from "react";
import { useCart } from "../../utilities/cartContext";
import { Link } from "react-router-dom";

const Cart = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { cartItems, removeItemFromCart, clearCart } = useCart();
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transition-transform transform ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {" "}
      <button className="p-4 text-right" onClick={handleCloseDrawer}>
        X
      </button>
      <div className="w-full md:w-full lg:w-8/12">
        <div className="m-3">
          {cartItems.length > 0 ? (
            <div className="">
              <h2 className="text-2xl md:text-2xl font-medium text-textColor">
                Shopping Cart
              </h2>
              {/* <div className=" shadow-md sm:rounded-lg "> */}
              <table className="w-full  overflow-x-auto text-sm text-left text-gray-500 ">
                <thead className="text-sm text-gray-700 uppercase bg-gray-100 py-5">
                  <tr className="bg-transparent ">
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.length > 0 &&
                    cartItems?.map((item, index = item.id) => {
                      const { id, img, title, price } = item;
                      return (
                        <tr key={id} className="border-b mb-3">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            <div className="flex  items-center gap-9">
                              {title}
                            </div>
                          </th>
                          <td>
                            <img
                              src={item?.img}
                              className="md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px]"
                              alt=""
                            />
                          </td>

                          <td className=" py-4">
                            <span className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                              ${price}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            {/* increment and decrement btn */}
                            <div className="flex itemc-center justify-centr gap-1">
                              <button
                                // onClick={() => increment(_id)}
                                className="w-9 h-9 rounded  bg-gray-100 border border-gray-300"
                              >
                                +
                              </button>

                              <button
                                // onClick={() => decrement(_id)}
                                className="w-9 h-9 rounded  bg-gray-100 border border-gray-300"
                              >
                                -
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-base">
                            <button onClick={() => removeItemFromCart(item.id)}>
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            // </div>
            <section className="flex w-ful items-center h-full sm:p-16">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-40 h-40 text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                  ></path>
                  <rect
                    width="176"
                    height="32"
                    x="168"
                    y="320"
                    fill="currentColor"
                  ></rect>
                  <polygon
                    fill="currentColor"
                    points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                  ></polygon>
                  <polygon
                    fill="currentColor"
                    points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                  ></polygon>
                </svg>
                <div>
                  <h1 className="text-5xl my-4 text-center font-extrabold text-gray-700 tracking-widest">
                    Cart is empty.
                  </h1>
                  <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
                    Please add some{" "}
                    <Link
                      className="underline text-primary font-bold "
                      to={"/products"}
                    >
                      Products
                    </Link>
                  </h1>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      {/* <TotalOrder /> */}
    </div>
  );
};

export default Cart;
