import React from 'react';
import { AUTH_LOGIN } from './actionType';

const initialState = {
  user: {},
  isAuth: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isAuth: true
      }
    case AUTH_LOGIN:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state;
  }
}
