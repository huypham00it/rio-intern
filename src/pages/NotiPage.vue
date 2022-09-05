<template>
  <div v-if="show">
    <h1>{{ content }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import authFetch from "@/services/authFetch";

import { ActionTypes } from "@/modules";
const { LOGOUT } = ActionTypes;

export default {
  name: "NotiPage",
  data() {
    return {
      content: "",
      show: false,
    };
  },
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    },
  },
  async mounted() {
    const res = await authFetch.get(process.env.VUE_APP_API_URL + "/test/mod");
    if (res.status === 401) {
      this.$vs.dialog({
        type: "confirm",
        color: "warning",
        title: `Unauthorized`,
        text: "Please login again to access on this server",
        accept: this.acceptAlert,
        cancel: this.cancelAlert,
      });
    } else if (res.status === 403) {
      return this.$router.push("/403");
    } else {
      this.show = true;
      this.content = res;
    }
  },
  methods: {
    ...mapActions([`user/${LOGOUT}`]),
    acceptAlert() {
      this[`user/${LOGOUT}`]();
      this.$router.push("/auth/login");
    },
    cancelAlert() {
      this.$router.push("/");
    },
  },
};
</script>
