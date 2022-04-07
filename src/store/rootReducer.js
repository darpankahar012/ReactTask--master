import { combineReducers } from "redux";
import { image, } from "./reducers";

const appReducer = combineReducers({
  image: image,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
