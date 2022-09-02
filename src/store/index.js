import Vue from "vue";
import Vuex from "vuex";

import { BlogModule, UserModule, JobModule } from "@/modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkMode: false,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    blog: BlogModule,
    user: UserModule,
    job: JobModule,
  },
  strict: process.env.NODE_ENV !== "production",
});
