import { LOGIN, LOGOUT, IS_LOGGED_IN } from "./ActionTypes";

const user = JSON.parse(localStorage.getItem("user")) || null;

export default {
  namespaced: true,
  state: {
    [IS_LOGGED_IN]: user ? true : false,
    user: user,
  },
  getters: {
    [IS_LOGGED_IN](state) {
      return state.IS_LOGGED_IN;
    },
    user(state) {
      return state.user;
    },
  },
  actions: {
    [LOGIN]({ commit }, user) {
      commit(LOGIN, user);
    },
    [LOGOUT]({ commit }) {
      commit(LOGOUT);
    },
  },
  mutations: {
    [LOGIN](state, user) {
      state.user = user;
      state.IS_LOGGED_IN = true;
    },
    [LOGOUT](state) {
      localStorage.clear();
      state.IS_LOGGED_IN = false;
      state.user = null;
    },
  },
};
