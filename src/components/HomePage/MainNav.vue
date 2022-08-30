<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="navItem in navItems"
              :key="navItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                navItem
              }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex h-full items-center ml-auto">
          <action-button
            v-if="!isLoggedIn"
            data-test="login-button"
            text="Sign in"
            @click="handleLogin()"
          />
          <profile-image v-else data-test="profile-image"></profile-image>
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>
<script>
import { ActionButton } from "@/components/Shared";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Rio Fintech",
      url: "https://riofintech.vn",
      navItems: [
        "Teams",
        "Locations",
        "Life at Rio Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return this.isLoggedIn ? "h-32" : "h-16";
    },
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
    },
  },
};
</script>
