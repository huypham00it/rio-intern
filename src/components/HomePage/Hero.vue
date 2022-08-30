<template>
  <main>
    <section class="p-4 h-screen">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>

        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>

        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://riofintech.vn/media/statics/logo/rio-fintech-logo.svg"
            alt="riofintech"
            class="w-80 h-80"
          />
        </div>

        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "./Headline.vue";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
