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

export const updateSwitch = (data) => {

    return {
        type: "UPDATE_SWITCH",
        payload: data
    }
};
export const ticketSwitch = (data) => {

    return {
        type: "TICKET_SWITCH",
        payload: data
    }
};
export const editSwitch = (data) => {

    return {
        type: "EDIT_SWITCH",
        payload: data
    }
};

// export const deleteTransactionAsync = (newArr) => {
    
//     return {
//         type: "DELETE_TRANSACTION",
//         payload: newArr
//     }
// };
// using Thunk to delay the update of the state.
export const deleteTransaction = data => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: data
            });
        }, 2000)

    }
}