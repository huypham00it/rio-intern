<template>
  <form
    class="h-12 border border-brand-gray-3 rounded-3xl flex items-center w-full mt-14"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex items-center w-full justify-between">
      <div class="relative pl-3 flex-1">
        <label class="absolute left-0 -top-10" for="">Role</label>
        <text-input
          v-model="role"
          name="role"
          placeholder="Software engineer"
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
        />
      </div>
      <action-button
        text="Search"
        type="secondary"
        class="rounded-r-3xl"
        @click.prevent="customNoti"
      />
    </div>
  </form>
</template>
<script>
import { ActionButton, TextInput } from "@/components/Shared";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    customNoti() {
      alert(this.role + " " + this.location);
    },
  },
};
</script>
