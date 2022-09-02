<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link :to="{ name: 'home' }">
          <a class="flex items-center h-full text-xl">{{ company }}</a>
        </router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="(navItem, index) in navItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="navItem.url"
                class="flex items-center h-full py-2.5"
                >{{ navItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex h-full items-center ml-auto">
          <router-link v-if="!isLoggedIn" to="/auth/login">
            <action-button data-test="login-button" text="Sign in" />
          </router-link>
          <div v-else class="relative user-avatar">
            <profile-image data-test="profile-image"></profile-image>
            <div
              class="absolute right-0 top-6 rounded-md py-3 bg-brand-gray-1 w-32 hidden"
            >
              <vs-button
                line-position="top"
                class="w-full"
                type="line"
                @click="LOGOUT"
                >Log out</vs-button
              >
              <!-- <button
                class="px-3 hover:bg-brand-gray-2 w-full text-left"
                
              >
                Log out
              </button> -->
            </div>
          </div>
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import { ActionButton } from "@/components/Shared";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";
import { ActionTypes } from "@/modules";

const { LOGOUT } = ActionTypes;

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Rio Fintech",
      navItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/dashboard" },
        { text: "Life at Rio Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    headerHeightClass() {
      return this.isLoggedIn ? "h-32" : "h-16";
    },
  },
  methods: {
    ...mapActions([LOGOUT]),
  },
};
</script>

<style scoped>
.user-avatar:hover > div {
  display: block;
}
</style>
