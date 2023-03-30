import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import {CartPage} from "../Pages/Cart/CartPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
