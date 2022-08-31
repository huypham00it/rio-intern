<template>
  <div>
    <MainNav v-if="isShowNav" />
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    MainNav,
  },
  computed: {
    ...mapGetters(["isShowNav"]),
  },
  methods: {
    ...mapActions(["hideNav"]),
  },
  beforeCreate() {
    const currentPath = this.$route.path;
    if (currentPath.indexOf("auth") >= 0) {
      this.$store.commit("hideNav");
    } else {
      this.$store.state.isShowNav = true;
    }
  },
  watch: {
    $route(to) {
      if (to.path.indexOf("auth") >= 0) {
        this.$store.commit("hideNav");
      } else {
        this.$store.state.isShowNav = true;
      }
    },
  },
};
</script>

<style></style>
