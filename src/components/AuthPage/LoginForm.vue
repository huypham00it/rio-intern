<template>
  <div>
    <div class="mb-11 text-center">
      <h3 class="text-2xl mb-3">Log in</h3>
      <p class="text-gray-600 font-light">Welcome back, please log in!</p>
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
    <ValidationObserver v-slot="{ handleSubmit, invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="mb-3">
          <ValidationProvider
            name="username"
            rules="usernameRequired|required"
            v-slot="{ errors }"
          >
            <AuthInput
              v-model="formData.username"
              type="text"
              name="Username / Email"
              placeholder="Username / Email"
              :errors="errors"
            />
          </ValidationProvider>
        </div>

        <div>
          <ValidationProvider
            name="password"
            rules="required|passwordRequired"
            v-slot="{ errors }"
          >
            <AuthInput
              v-model="formData.password"
              type="password"
              name="Password"
              placeholder="Password"
              :errors="errors"
            />
          </ValidationProvider>
        </div>
        <div class="mt-4">
          <button
            class="border-0 px-8 py-2 text-center font-light w-full bg-pink-500 hover:shadow-lg hover:shadow-red-300 rounded-md text-sm text-white my-3"
            :class="invalid ? 'bg-pink-200 pointer-events-none' : ''"
            type="submit"
          >
            Login
          </button>
          <div class="flex items-center">
            <div class="border-b border-gray-300 flex-1 mr-2"></div>
            <div>or</div>
            <div class="border-b border-gray-300 flex-1 ml-2"></div>
          </div>
          <router-link
            to="/auth/register"
            class="border-0 px-8 py-2 text-center font-light w-full bg-red-500 hover:shadow-lg hover:shadow-red-300 rounded-md text-sm text-white inline-block my-3"
            >Register</router-link
          >
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

import { AuthInput } from "@/components/Shared";
import { ActionTypes } from "@/modules";

const { LOGIN, IS_LOGGED_IN } = ActionTypes;

export default {
  name: "RegisterForm",
  data() {
    return {
      formData: { username: "", password: "" },
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters("user", [IS_LOGGED_IN]),
  },
  components: {
    AuthInput,
  },
  methods: {
    ...mapActions([`user/${LOGIN}`]),
    async onSubmit() {
      try {
        const { data } = await axios.post(
          process.env.VUE_APP_API_URL + "/api/auth/signin",
          {
            username: this.formData.username,
            password: this.formData.password,
          }
        );

        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
          this[`user/${LOGIN}`](data);
          this.$router.push("/");
        }
      } catch ({ response }) {
        const error = response.data;
        if (error.status === 500) {
          this.errorMessage = "Internal Server Error";
        } else {
          this.errorMessage = error.message;
        }
      }
    },
  },
  mounted() {
    if (this[IS_LOGGED_IN]) {
      this.$router.push("/");
    }
  },
};
</script>
