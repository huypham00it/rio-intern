<template>
  <div>
    <div class="h-16 border-b border-brand-gray-1 border-solid bg-white w-full">
      <div class="flex items-center h-full px-8">
        <div v-if="onJobResultsPage" data-test="job-count">
          <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
          <span
            ><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
            jobs matched</span
          >
        </div>
        <div v-else class="ml-auto flex gap-12" data-test="job-count">
          <router-link to="/">Saved jobs</router-link>
          <router-link to="/">Jobs alerts</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { ActionTypes } from "@/modules";

const { FILTERED_JOBS } = ActionTypes;

export default {
  name: "SubNav",
  computed: {
    ...mapGetters("job", [FILTERED_JOBS]),
    onJobResultsPage() {
      return this.$route.name === "JobResult";
    },
  },
};
</script>
