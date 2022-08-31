<template>
  <div>
    <h1>Notices page</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NotiPage",
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    },
  },
};
</script>
