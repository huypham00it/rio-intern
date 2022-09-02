<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-item v-for="job in displayJob" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p v-if="displayJob.length == 0" class="text-sm flex-grow">
          Not results found
        </p>
        <p v-else class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            class="hover:text-brand-blue-2"
            :to="{ name: 'JobResult', query: { page: previousPage } }"
            v-if="previousPage"
            >Previous</router-link
          >
          <router-link
            class="ml-3 hover:text-brand-blue-2"
            :to="{ name: 'JobResult', query: { page: nextPage } }"
            v-if="nextPage"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import { ActionTypes } from "@/modules";
import JobItem from "./JobItem.vue";

const { FETCH_JOBS, FILTERED_JOBS } = ActionTypes;

export default {
  name: "JobList",
  components: {
    JobItem,
  },
  async mounted() {
    this[`job/${FETCH_JOBS}`]();
  },
  computed: {
    ...mapGetters("job", [FILTERED_JOBS]),
    previousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : undefined;
    },
    nextPage() {
      return this.currentPage < this.totalPage
        ? this.currentPage + 1
        : undefined;
    },
    totalPage() {
      return Math.ceil(this[FILTERED_JOBS].length / 10);
    },
    currentPage() {
      return Number.parseInt(this.$route.query.page || 1);
    },
    displayJob() {
      const page = this.currentPage;
      return this[FILTERED_JOBS].slice((page - 1) * 10, 10 * page);
    },
  },
  methods: {
    ...mapActions([`job/${FETCH_JOBS}`]),
  },
};
</script>
