import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

import Dashboard from "../Adminsfz/Dashboard";
import AllAddminProducts from "./../Adminsfz/AllAddminProducts";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin-dashboard" element={<Dashboard />}></Route>
      <Route path="/admin-products" element={<AllAddminProducts />}></Route>

    </Routes>
  );
};
