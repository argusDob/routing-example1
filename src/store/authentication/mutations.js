const SET_AUTHENTICATION_STATUS = (state, isLoggedIn) => {
  state.authState.isAuthenticated = isLoggedIn;
};

export default {
  SET_AUTHENTICATION_STATUS,
};
