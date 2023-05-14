import React from 'react';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from './actionType';

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ||
  {
    email: "",
    firstName: "",
    lastName: "",
  },
  isAuth:  localStorage.getItem("isAuth") ||false,
}
// localStorage.getItem("isAuth") ||

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNUP:
      let obj1 = {
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      }
      localStorage.setItem("user", JSON.stringify(obj1));
      localStorage.setItem("isAuth", true);

      return {
        ...state,
        user: {
          ...state.user,
          ...obj1
        },
        isAuth: false
      }
    case AUTH_LOGIN:
      let obj2 = {
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      }
      localStorage.setItem("user", JSON.stringify(obj2));
      localStorage.setItem("isAuth", true);

      return {
        ...state,
        user: {
          ...state.user,
          ...obj2
        },
        isAuth: true
      }
    case AUTH_LOGOUT:
      let obj3 = {
        email: "",
        firstName: "",
        lastName: "",
      }
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");

      return {
        ...state,
        user: {
          ...state.user,
          ...obj3
        },
        isAuth: false
      }
    default:
      return state;
  }
}
