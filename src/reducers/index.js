import userReducer from "./user";
import transactionReducer from "./transaction";
import chosenReducer from "./chosen"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userReducer,
    transactionReducer,
    chosenReducer
});

export default allReducers;
