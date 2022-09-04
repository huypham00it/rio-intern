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
import { ref, onMounted } from "vue";

import axios from "axios";

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);
    const getSpotlights = async () => {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + "/spotlights"
      );
      spotlights.value = data;
    };
    onMounted(getSpotlights);
    return { spotlights };
  },
};
</script>
