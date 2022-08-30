<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import { MainNav, Hero } from "@/components/HomePage";
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
