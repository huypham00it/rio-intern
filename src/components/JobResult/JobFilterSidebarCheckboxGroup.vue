<template>
  <accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="w-1/2 h-8"
            v-for="(value, index) in uniqueValues"
            :key="index"
          >
            <input
              type="checkbox"
              name=""
              class="mr-3"
              :id="value"
              :value="value"
              v-model="selectedValues"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { Accordion } from "@/components/Shared";
import { ref } from "vue";

export default {
  name: "JobFilterSidebarCheckboxGroup",
  props: {
    header: {
      type: String,
      require: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup() {
    const selectedValues = ref([]);
    return { selectedValues };
  },
  components: {
    Accordion,
  },
  methods: {
    selectValue() {
      this.$store.commit(this.mutation, this.selectedValues);
      this.$router
        .push({
          name: "JobResult",
        })
        .catch(() => {});
    },
  },
};
</script>
