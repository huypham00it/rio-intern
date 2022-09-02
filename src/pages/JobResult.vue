<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-list />
  </div>
</template>
<script>
import { JobFilterSidebar, JobList } from "@/components/JobResult";
export default {
  name: "JobResult",
  components: {
    JobFilterSidebar,
    JobList,
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style></style>
