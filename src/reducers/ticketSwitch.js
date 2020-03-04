
const initialState = {
    update: false,
    ticket: false
    };

const switchReducer = (state = initialState, action) => {
    
        if (action.type === "TICKET_SWITCH"){
            return state = { ...state, ticket: action.payload}
        } else if (action.type === "UPDATE_SWITCH"){
            return state = { ...state, update: action.payload}
        } else {
            return state
        }

}

export default switchReducer;