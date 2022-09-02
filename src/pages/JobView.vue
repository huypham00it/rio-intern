<template>
  <div>
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
