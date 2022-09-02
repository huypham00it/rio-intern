<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="w-1/2 h-8"
            v-for="(type, index) in UNIQUE_JOB_TYPES"
            :key="index"
          >
            <input
              type="checkbox"
              name=""
              class="mr-3"
              :id="type"
              :value="type"
              v-model="selectedJobTypes"
              @change="selectType"
            />
            <label :for="type">{{ type }}</label>
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

const { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } = ActionTypes;

export default {
  name: "JobFilterSidebarJobTypes",
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  components: {
    Accordion,
  },
  computed: {
    ...mapGetters("job", [UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([`job/${ADD_SELECTED_JOB_TYPES}`]),
    selectType() {
      this[`job/${ADD_SELECTED_JOB_TYPES}`](this.selectedJobTypes);
      this.$router
        .push({
          name: "JobResult",
        })
        .catch(() => {});
    },
  },
};
</script>
