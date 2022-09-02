<template>
  <div class="flex h-screen justify-center">
    <auth-left class="lg:basis-1/2 xl:basis-3/4" />
    <div
      class="w-full lg:basis-1/2 xl:basis-1/4 h-full bg-white p-16 flex flex-col justify-center max-w-xl"
    >
      <router-view />
    </div>
  </div>
</template>
<script>
import { AuthLeft } from "@/components/AuthPage";

export default {
  name: "AuthPage",
  components: {
    AuthLeft,
  },
};
</script>
