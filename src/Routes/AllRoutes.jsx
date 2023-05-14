import React from "react";

import { Route, Routes } from "react-router-dom";

import SingleProduct from "../Pages/ProductCard/SingleProduct";

import { Home } from "../Pages/Home/Home";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/SingleProduct" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
