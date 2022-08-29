<template>
  <div>
    <div class="mb-11 text-center">
      <h3 class="text-2xl mb-3">Register</h3>
      <p class="text-gray-600 font-light">
        Complete the following information to create a new account.
      </p>
    </div>
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
            rules="required|min:8"
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

        <div>
          <ValidationProvider
            name="confirmPassword"
            rules="required"
            v-slot="{ errors }"
          >
            <AuthInput
              v-model="formData.confirmPassword"
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              :errors="errors"
            />
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
import AuthInput from "@/components/shared/AuthInput.vue";

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
        confirmPassword: "",
      },
    };
  },
  components: {
    AuthInput,
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>
