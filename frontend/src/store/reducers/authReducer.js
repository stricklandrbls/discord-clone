
const initState = {
    userDetails: null
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case "dummy":
            return{
                ...state,
            };
        default:
            return state;
    }
}

export default reducer