import axios from "axios";
import {
  ADD_PRODUCTS_SUCCSESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "./actionTypes";

// Adding Products in db.jons // post request----------

export const addProducstData = (adData) => (dispatch) => {
  dispatch(addProductsReq());
  axios
    .post("http://localhost:8088/electronics", adData)
    .then((res) => {
      //   console.log(res);
      dispatch(addProductsSuc());
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(addProductsFai());
    });
};

export const addProductsReq = () => {
  return { type: PRODUCTS_REQUEST };
};

export const addProductsSuc = () => {
  return { type: ADD_PRODUCTS_SUCCSESS };
};

export const addProductsFai = () => {
  return { type: PRODUCTS_FAILURE };
};
