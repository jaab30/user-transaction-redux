const transactionReducer = (state = [], action) => {

    switch(action.type){
        case "ADD_TRANSACTION":
            return state = [...state, action.payload];
        default:
            return state;
    }

};


export default transactionReducer;

