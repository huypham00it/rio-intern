<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="w-1/2 h-8"
            v-for="(organization, index) in UNIQUE_ORGANIZATIONS"
            :key="index"
          >
            <input
              type="checkbox"
              name=""
              class="mr-3"
              :id="organization"
              :value="organization"
              v-model="selectedOrganizations"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

import { Accordion } from "@/components/Shared";
import { ActionTypes } from "@/modules";

const { UNIQUE_ORGANIZATIONS, ADD_SELECTED_ORGANIZATIONS } = ActionTypes;

export default {
  name: "JobFilterSidebarOrganization",
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  components: {
    Accordion,
  },
  computed: {
    ...mapGetters("job", [UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapMutations([`job/${ADD_SELECTED_ORGANIZATIONS}`]),
    selectOrganization() {
      this[`job/${ADD_SELECTED_ORGANIZATIONS}`](this.selectedOrganizations);
      this.$router
        .push({
          name: "JobResult",
        })
        .catch(() => {});
    },
  },
};
</script>
