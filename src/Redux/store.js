import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as adminsReduer } from "./AdminReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as fashionReducer } from "./FashionReducer/reducer";

const rootReducer = combineReducers({
  adminsReduer,
  authReducer,
  fashionReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
