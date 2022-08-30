<template>
  <div>
    <div class="mb-11 text-center">
      <h3 class="text-2xl mb-3">Log in</h3>
      <p class="text-gray-600 font-light">Welcome back, please log in!</p>
    </div>
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
            rules="required|min:6"
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
import { AuthInput } from "@/components/Shared";
import authFetch from "@/services/axios/interceptors";

export default {
  name: "RegisterForm",
  data() {
    return {
      formData: { username: "", password: "" },
    };
  },
  components: {
    AuthInput,
  },
  methods: {
    onSubmit() {
      try {
        authFetch
          .post("/api/auth/signin", {
            username: this.formData.username,
            password: this.formData.password,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
