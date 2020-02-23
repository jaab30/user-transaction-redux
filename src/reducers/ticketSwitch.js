const ticketSwitchReducer = (state = false, action) => {
    console.log(action.payload);
    
        if (action.type === "TICKET_SWITCH"){
            return state = action.payload
        } else {
            return state
        }

}

export default ticketSwitchReducer;