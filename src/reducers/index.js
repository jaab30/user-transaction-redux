import userReducer from "./user";
import transactionReducer from "./transaction";
import chosenReducer from "./chosen"
import switchReducer from "./ticketSwitch"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userReducer,
    transactionReducer,
    chosenReducer,
    switchReducer
});

export default allReducers;
