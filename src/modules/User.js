import { LOGIN, LOGOUT } from "./ActionTypes";

export default {
  namespace: true,
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    [LOGIN]({ commit }) {
      commit(LOGIN);
    },
    [LOGOUT]({ commit }) {
      commit(LOGOUT);
    },
  },
  mutations: {
    [LOGIN](state) {
      state.isLoggedIn = true;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    },
  },
};
