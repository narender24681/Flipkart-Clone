import {
  ADD_PRODUCTS_SUCCSESS,
  DETADM_PRODUCTS_SUCCSESS,
  GET_PRODUCTS_SUCCESS,
  PATCH_PRODUCTS_SUCCSESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  electronics: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCTS_SUCCSESS:
      return { ...state, isLoading: false };
    case PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DETADM_PRODUCTS_SUCCSESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        electronics: action.payload,
      };

    case PATCH_PRODUCTS_SUCCSESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
