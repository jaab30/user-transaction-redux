
const usersReducer = (state = [], action) => {

    switch(action.type){
        case "NEW_USER":
            return state = [...state, action.payload];
        default:
            return state
    }

};

export default usersReducer;
