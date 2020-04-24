const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState,action) =>{
    if(action.type==="LOGIN"){
        return{
            isLoggedIn:true
        }
    }
    return state
}

export default reducer;