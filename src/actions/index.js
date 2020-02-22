export const newUser = (data) => {
    return {
        type: "NEW_USER",
        payload: data
    }
}
export const currentUser = (chosen) => {
console.log("action");
console.log(chosen);

    return {
        type: "CURRENT_USER",
        payload: chosen
    }
}
export const addTransaction = (data) => {
    return {
        type: "ADD_TRANSACTION",
        payload: data
    }
}