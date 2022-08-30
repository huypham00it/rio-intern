<template>
  <img
    :src="imageLink"
    alt="avatar"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
import { Avatar } from "@/images";
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: Avatar,
    };
  },
};
</script>
