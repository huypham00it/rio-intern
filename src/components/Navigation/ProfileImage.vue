<template>
  <vs-chip>
    <vs-avatar size="large" :src="imageLink" />
    {{ user.fullName }}
  </vs-chip>
</template>

<script>
import { mapGetters } from "vuex";
import { Avatar } from "@/images";
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: Avatar,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
};
</script>
