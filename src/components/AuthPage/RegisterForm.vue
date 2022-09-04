<template>
  <div>
    <div class="mb-11 text-center">
      <h3 class="text-2xl mb-3">Register</h3>
      <p class="text-gray-600 font-light">
        Complete the following information to create a new account.
      </p>
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
    <ValidationObserver v-slot="{ handleSubmit, invalid, untouched }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="mb-3">
          <div class="flex gap-2">
            <ValidationProvider
              name="firstname"
              rules="required"
              v-slot="{ errors }"
              class="flex-1"
            >
              <AuthInput
                v-model="formData.firstname"
                type="text"
                name="First name"
                placeholder="First name"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider
              name="lastname"
              rules="required"
              v-slot="{ errors }"
              class="flex-1"
            >
              <AuthInput
                v-model="formData.lastname"
                type="text"
                name="Last name"
                placeholder="Last name"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
        </div>

        <div>
          <ValidationProvider
            name="username"
            rules="onlyUsernameRequired|required"
            v-slot="{ errors }"
            class="flex-1"
          >
            <AuthInput
              v-model="formData.username"
              type="text"
              name="Username"
              placeholder="Username"
              :errors="errors"
            />
          </ValidationProvider>
        </div>

        <div>
          <ValidationProvider
            name="email"
            rules="required|email"
            v-slot="{ errors }"
            class="flex-1"
          >
            <AuthInput
              v-model="formData.email"
              type="text"
              name="Email"
              placeholder="Email"
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

        <div>
          <ValidationProvider
            name="confirmPassword"
            rules="required|passwordRequired"
            v-slot="{ errors }"
          >
            <AuthInput
              v-model="confirmPassword"
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              :errors="errors"
            />
            <span
              class="text-red-500 text-sm"
              v-if="!isMatchPassword && errors.length === 0"
              >Password doesn't match</span
            >
          </ValidationProvider>
        </div>
        <div class="mt-4 text-center">
          <button
            class="border-0 px-8 py-2 text-center font-light w-full bg-pink-500 hover:shadow-lg hover:shadow-red-300 rounded-md text-sm text-white my-3"
            :class="
              invalid && untouched ? 'bg-pink-200 pointer-events-none' : ''
            "
            type="submit"
          >
            Sign up
          </button>
          <p>
            Already have one?
            <router-link to="/auth/login" class="font-bold text-pink-500"
              >Log in</router-link
            >
          </p>
          <p>
            By registering for an account, you agree to our
            <span class="text-pink-400">terms and conditions</span>
          </p>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { AuthInput } from "@/components/Shared";
import axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
      },
      confirmPassword: "",
      errorMessage: "",
      isConfirmTouched: false,
    };
  },
  components: {
    AuthInput,
  },
  computed: {
    isMatchPassword() {
      if (this.confirmPassword.length === 0) return true;
      return (
        this.confirmPassword.length > 0 &&
        this.confirmPassword === this.formData.password
      );
    },
  },
  methods: {
    async onSubmit() {
      const { username, email, password, firstname, lastname } = this.formData;

      try {
        const { data } = await axios.post(
          process.env.VUE_APP_API_URL + "/auth/signup",
          {
            username,
            email,
            password,
            fullName: firstname + " " + lastname,
          }
        );
        if (data.code === 201) {
          this.$vs.notify({
            title: data.status,
            text: data.message,
            color: "success",
            position: "top-right",
            icon: "verified_user",
          });
          this.$router.push("/auth/login");
        }
      } catch (error) {
        if (error.status >= 500) {
          this.errorMessage = "Internal Server Error";
        } else {
          const data = error.response.data;
          this.$vs.notify({
            title: data.status,
            text: data.message,
            color: "warning",
            position: "top-right",
            time: 4000,
            icon: "sms_failed",
          });
        }
      }
    },
  },
};
</script>
