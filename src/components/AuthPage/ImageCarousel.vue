<template>
  <div class="flex justify-center items-center img-carousel">
    <div class="px-10 h-full">
      <carousel
        :per-page="1"
        :autoplay="true"
        :navigation-enabled="true"
        :pagination-enabled="false"
        :loop="true"
        class="max-w-3xl h-full flex items-center justify-center aspect-square"
      >
        <slide v-for="(img, index) in images" :key="index">
          <img :src="img" alt="login_info" class="mx-auto carousel-img" />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "ImageCarousel",
  props: {
    images: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style scoped>
.img-carousel {
  height: 80%;
}

.carousel-img {
  max-height: 80vh;
  width: auto;
}
</style>
