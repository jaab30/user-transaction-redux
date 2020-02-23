
const usersReducer = (state = [], action) => {

    switch(action.type){
        case "NEW_USER":
            return state = [...state, action.payload].sort((a, b) => (a.id > b.id) ? 1 : -1);
        default:
            return state;
    }

};

export default usersReducer;
