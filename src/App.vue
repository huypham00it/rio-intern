<template>
  <div :class="themeMode">
    <main-nav v-if="isShowNav" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

import MainNav from "@/components/Navigation";
export default {
  name: "App",
  components: {
    MainNav,
  },
  computed: {
    ...mapState(["isDarkMode"]),
    isShowNav() {
      const currentPath = this.$route.path;
      return currentPath.indexOf("auth") < 0;
    },
    themeMode() {
      if (this.isDarkMode) {
        document.querySelector("html").classList.add("dark");
        return true;
      } else {
        document.querySelector("html").classList.remove("dark");
        return false;
      }
    },
  },
  methods: {},
};
</script>

<style></style>
