export const authState = { isAuthenticated: localStorage.getItem('isLoggedIn') || false };

export default {
  authState,
};
