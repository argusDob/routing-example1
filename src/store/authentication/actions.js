const login = async ({ commit }, { username, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof username === 'undefined' || typeof password === 'undefined') {
      console.warn('Wrong Parameters');
    }

    if (username === 'uncinc' && password === 'letmein') {
      commit('SET_AUTHENTICATION_STATUS', true);
      localStorage.setItem('isLoggedIn', true);

      console.log('in the login ');
      resolve(200);
    } else {
      const errorData = { code: 403, message: 'Invalid Credentials' };
      const error = new Error(JSON.stringify(errorData));
      reject(error);
    }
  }, 2000);
});

export default {
  login,
  // logout,
};
