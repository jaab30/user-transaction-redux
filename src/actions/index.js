export const newUser = (data) => {
    return {
        type: "NEW_USER",
        payload: data
    }
};
export const currentUser = (chosen) => {

    return {
        type: "CURRENT_USER",
        payload: chosen
    }
};
export const addTransaction = (data) => {
    
    return {
        type: "ADD_TRANSACTION",
        payload: data
    }
};

export const ticketSwitch = (data) => {

    return {
        type: "TICKET_SWITCH",
        payload: data
    }
};

export const deleteTransaction = (newArr) => {
    
    return {
        type: "DELETE_TRANSACTION",
        payload: newArr
    }
};