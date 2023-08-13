import React, { useState } from "react";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer.js/Footer";
import Cart from "../../pages/Cart/Cart";

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Cart isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
