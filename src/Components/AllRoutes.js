import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { CartPage } from "../Pages/Cart/CartPage";
import Dashboard from "../Adminsfz/Dashboard";
import AllAddminProducts from "./../Adminsfz/AllAddminProducts";
import EditDash from "./../Adminsfz/EditDash";
import { CheckoutPage, Placeorder } from "../Pages/Checkout/CheckoutPage";
import { OrderSuccessPage } from "../Pages/order-sucess/OrderSuccessPage";
import Mens from "../Pages/Fashion/Mens";
import Womens from "../Pages/Fashion/Womens";
import SingleProduct from "../Pages/ProductCard/SingleProduct";
import { PrivateRoute } from "../Pages/Auth/PrivateRoute";
import { Search } from "../Pages/Home/Search";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/admin-dashboard" element={<Dashboard />}></Route>
      <Route path="/admin-products" element={<AllAddminProducts />}></Route>
      <Route path={"/edit/:id"} element={<EditDash />}></Route>
      <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/placeorder" element={<Placeorder />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      {/* <Route path="/kids" element={<CheckoutPage />} /> */}
      <Route path="/order-sucess" element={<OrderSuccessPage />} />
      <Route path="/admin-dashboard" element={<Dashboard />}></Route>
      <Route
        path="/admin-products"
        element={<AllAddminProducts />}
      ></Route>{" "}
      <Route path="/SingleProduct/:id" element={<SingleProduct />}></Route>
    </Routes>
  );
};
