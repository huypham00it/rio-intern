<template>
  <div class="flex flex-col w-96 bg-white p-4">
    <section class="pb-6">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filter" type="secondary" />
        </div>
      </div>
      <job-filter-sidebar-checkbox-group
        header="Job Types"
        :uniqueValues="UNIQUE_JOB_TYPES"
        :mutation="addSelectedJobTypes"
      />
      <job-filter-sidebar-checkbox-group
        header="Organizations"
        :uniqueValues="UNIQUE_ORGANIZATIONS"
        :mutation="addSelectedOrganizations"
      />
      <!-- <job-filter-sidebar-job-types />
      <job-filter-sidebar-organization /> -->
    </section>
  </div>
</template>

<script>
// import JobFilterSidebarOrganization from "./JobFilterSidebarOrganizations.vue";
// import JobFilterSidebarJobTypes from "./JobFilterSidebarJobTypes.vue";
import { mapGetters } from "vuex";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { ActionButton } from "@/components/Shared";
import { ActionTypes } from "@/modules";

const {
  UNIQUE_JOB_TYPES,
  ADD_SELECTED_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  ADD_SELECTED_ORGANIZATIONS,
} = ActionTypes;

export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    JobFilterSidebarCheckboxGroup,
    // JobFilterSidebarOrganization,
    // JobFilterSidebarJobTypes,
  },
  computed: {
    ...mapGetters("job", [UNIQUE_JOB_TYPES, UNIQUE_ORGANIZATIONS]),
  },
  setup() {
    const addSelectedJobTypes = `job/${ADD_SELECTED_JOB_TYPES}`;
    const addSelectedOrganizations = `job/${ADD_SELECTED_ORGANIZATIONS}`;
    return {
      addSelectedJobTypes,
      addSelectedOrganizations,
    };
  },
};
</script>
