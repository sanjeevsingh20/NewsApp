import { combineReducers } from "redux";
import changeno from "./reducers";

const rootreducers = combineReducers({
    changeno:changeno
})

export default rootreducers