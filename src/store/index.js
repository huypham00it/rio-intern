import Vue from "vue";
import Vuex from "vuex";

import { BlogModule, UserModule } from "@/modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowNav: true,
  },
  getters: {
    isShowNav(state) {
      return state.isShowNav;
    },
  },
  mutations: {
    hideNav(state) {
      state.isShowNav = false;
    },
  },
  actions: {
    hideNav({ commit }) {
      commit("hideNav");
    },
  },
  modules: {
    blog: BlogModule,
    user: UserModule,
  },
});
