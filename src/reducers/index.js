import {combineReducers} from "redux";
import homeReducer from "./homeReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
    home:homeReducer,
    movie:movieReducer

})

export default rootReducer;