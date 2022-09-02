import getSpotlights from "@/api/getSpotlights";
import { RECEIVE_SPOTLIGHTS, FETCH_SPOTLIGHTS } from "./ActionTypes";

export default {
  namespaced: true,
  state: {
    spotlights: [],
  },
  getters: {
    spotlights(state) {
      return state.spotlights;
    },
  },
  mutations: {
    [RECEIVE_SPOTLIGHTS](state, spotlights) {
      state.spotlights = spotlights;
    },
  },
  actions: {
    [FETCH_SPOTLIGHTS]: async ({ commit }) => {
      const spotlights = await getSpotlights();
      commit(RECEIVE_SPOTLIGHTS, spotlights);
    },
  },
};
