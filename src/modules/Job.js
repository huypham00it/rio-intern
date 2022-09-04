import { getJobs } from "@/api";
import {
  RECEIVE_JOBS,
  FETCH_JOBS,
  UNIQUE_ORGANIZATIONS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_ORGANIZATIONS,
  INCLUDE_JOB_BY_TYPES,
} from "./ActionTypes";

export default {
  namespaced: true,
  state: {
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    filteredJobs: [],
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },
    [INCLUDE_JOB_BY_ORGANIZATIONS]: (state) => (job) => {
      if (state.selectedOrganizations.length === 0) return true;
      return state.selectedOrganizations.includes(job.organization);
    },
    [INCLUDE_JOB_BY_TYPES]: (state) => (job) => {
      if (state.selectedJobTypes.length === 0) return true;
      return state.selectedJobTypes.includes(job.jobType);
    },
    [FILTERED_JOBS](state, getters) {
      return state.jobs
        .filter((job) => getters[INCLUDE_JOB_BY_ORGANIZATIONS](job))
        .filter((job) => getters[INCLUDE_JOB_BY_TYPES](job));
    },
  },
  mutations: {
    [RECEIVE_JOBS](state, jobs) {
      state.jobs = jobs;
    },
    [ADD_SELECTED_ORGANIZATIONS](state, selectedOrganizations) {
      state.selectedOrganizations = selectedOrganizations;
    },
    [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
      state.selectedJobTypes = jobTypes;
    },
  },
  actions: {
    [FETCH_JOBS]: async ({ commit }) => {
      const jobs = await getJobs();
      commit(RECEIVE_JOBS, jobs);
    },
  },
};
