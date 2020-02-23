import userReducer from "./user";
import transactionReducer from "./transaction";
import chosenReducer from "./chosen"
import ticketSwitchReducer from "./ticketSwitch"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userReducer,
    transactionReducer,
    chosenReducer,
    ticketSwitchReducer
});

export default allReducers;
