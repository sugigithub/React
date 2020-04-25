const initialState = {
  isLoggedIn: sessionStorage.getItem("authenticated"),
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: sessionStorage.getItem("authenticated"),
    };
  }
  return state;
};

export default reducer;
