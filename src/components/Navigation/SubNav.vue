<template>
  <div class="h-16 border-b border-brand-gray-1 border-solid bg-white w-full">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1234</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
