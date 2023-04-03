const login = async ({ commit }, { username, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof username === 'undefined' || typeof password === 'undefined') {
      console.warn('Wrong Parameters');
    }

    if (username === 'uncinc' && password === 'letmein') {
      commit('SET_AUTHENTICATION_STATUS', true);
      localStorage.setItem('isLoggedIn', true);
      resolve(200);
    } else {
      const errorData = { code: 403, message: 'Invalid Credentials' };
      const error = new Error(JSON.stringify(errorData));
      reject(error);
    }
  }, 2000);
});

const logout = async ({ commit }) => new Promise((resolve) => {
  setTimeout(() => {
    commit('SET_AUTHENTICATION_STATUS', false);
    localStorage.removeItem('isLoggedIn');
    resolve(200);
  }, 500);
});

export default {
  login,
  logout,
};
