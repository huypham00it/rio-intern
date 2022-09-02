<template>
  <form
    class="h-12 border border-brand-gray-3 rounded-3xl flex items-center w-full mt-14"
    @submit.prevent="handleSubmit"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex items-center w-full justify-between">
      <div class="relative pl-3 flex-1">
        <label class="absolute left-0 -top-10" for="">Role</label>
        <text-input
          v-model="role"
          name="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3"
        >in</span
      >
      <div class="relative pl-3 flex-1">
        <label class="absolute left-0 -top-10" for="">Where?</label>
        <text-input
          v-model="location"
          name="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
      </div>
      <action-button
        text="Search"
        type="secondary"
        class="rounded-r-3xl"
        data-test="submit-button"
      />
    </div>
  </form>
</template>
<script>
import { ActionButton, TextInput } from "@/components/Shared";
import { ref } from "vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const role = ref("");
    const location = ref("");
    return { role, location };
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: "JobResult",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>
