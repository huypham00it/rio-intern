<template>
  <vs-chip>
    <vs-avatar size="large" :src="imageLink" />
    Pham Van Huy
  </vs-chip>
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
