import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducers from "./reducer/index";

const store =createStore(rootreducers,applyMiddleware(thunk))
export default store