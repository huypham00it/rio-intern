<template>
  <div
    class="hidden relative h-full auth-left lg:flex items-center justify-center"
  >
    <router-link to="/" class="absolute top-7 left-7 h-8 z-10">
      <img :src="logo" alt="hyperlead_logo" class="h-full" />
    </router-link>
    <image-carousel :images="collection" />
  </div>
</template>

<script>
import * as Images from "@/images";
import ImageCarousel from "./ImageCarousel.vue";

export default {
  name: "AuthLeft",
  data() {
    return {
      path: "",
      logo: Images.HyperleadLogo,
    };
  },
  computed: {
    collection() {
      const path = this.$route.path;

      if (path == "/auth/register") {
        return [
          Images.Buoc1,
          Images.Buoc2,
          Images.Buoc3,
          Images.Buoc4,
          Images.Buoc5,
          Images.Buoc6,
          Images.Buoc7,
          Images.Buoc8,
        ];
      } else {
        return [Images.Login1, Images.Login2, Images.Login3, Images.Login4];
      }
    },
  },
  components: {
    ImageCarousel,
  },
};
</script>

<style scoped>
.auth-left {
  background-color: #f7f7f7;
}
</style>
