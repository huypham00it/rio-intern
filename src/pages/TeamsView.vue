<template>
  <div>
    <header-container>
      <template #title>
        <h1 class="w-full text-4xl font-normal">Teams</h1>
      </template>

      <template #subtitle>
        <h2 class="w-full my-4 text-base font-lig">
          It's awesome working here. Why don't you come join us?
        </h2>
      </template>
    </header-container>

    <h1>{{ content }}</h1>
  </div>
</template>
<script>
import authFetch from "@/services/authFetch";
import { HeaderContainer } from "@/components/Shared";
export default {
  components: { HeaderContainer },
  name: "TeamView",
  data() {
    return {
      content: "",
    };
  },
  async mounted() {
    const response = await authFetch.get("/test/all");
    console.log(response);
    if (!response.status) {
      this.content = response;
    }
  },
};
</script>
