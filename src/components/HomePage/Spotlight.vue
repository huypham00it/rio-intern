<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :title="spotlight.title"
        :img="spotlight.img"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
<script>
// import { mapState, mapActions } from "vuex";
import { ref, onMounted } from "vue";

// import { ActionTypes } from "@/modules";

import authFetch from "@/services/axios/interceptors";

// const { FETCH_SPOTLIGHTS } = ActionTypes;

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);
    const getSpotlights = async () => {
      spotlights.value = await authFetch.get("/spotlights");
    };
    onMounted(getSpotlights);
    return { spotlights };
  },
  // computed: {
  //   ...mapState("spotlight", ["spotlights"]),
  // },
  // mounted() {
  //   this[`spotlight/${FETCH_SPOTLIGHTS}`]();
  // },
  // methods: {
  //   ...mapActions([`spotlight/${FETCH_SPOTLIGHTS}`]),
  // },
};
</script>
