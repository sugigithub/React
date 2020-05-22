const initialState = {
  isLoggedIn: sessionStorage.getItem("authenticated"),
  idToken: JSON.parse(sessionStorage.getItem("token")),
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: sessionStorage.getItem("authenticated"),
      idToken: JSON.parse(sessionStorage.getItem("token")),
    };
  }
  return state;
};

export default reducer;
