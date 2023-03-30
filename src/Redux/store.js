import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as adminsReduer } from "./AdminReducer/reducer";

const rootReducer = combineReducers({
  adminsReduer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
