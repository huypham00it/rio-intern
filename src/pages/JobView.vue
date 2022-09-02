<template>
  <div>
    <vs-breadcrumb>
      <li>
        <router-link to="/" title="Home">Home</router-link
        ><span class="vs-breadcrum--separator">/</span>
      </li>
      <li>
        <router-link to="/jobs/results" title="Jobs">Jobs</router-link
        ><span class="vs-breadcrum--separator">/</span>
      </li>
      <li aria-current="page" class="active">Job Details</li>
    </vs-breadcrumb>
    Job view
    <h2>{{ currentJob }}</h2>
  </div>
</template>
<script>
export default {
  name: "JobView",
  computed: {
    currentJob() {
      return this.$route.params.id;
    },
  },
};
</script>
