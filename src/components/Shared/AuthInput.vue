<template>
  <div>
    <label
      for="password"
      class="text-xs font-bold mb-1 capitalize"
      :class="errors.length > 0 ? 'text-red-400' : focus ? 'text-pink-400' : ''"
      >{{ name }}</label
    >
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      class="w-full border border-gray-400 focus:outline-none rounded-md py-1 px-2 focus:border-pink-400"
      @focus="focus = true"
      @blur="focus = false"
      @input="handleInput"
    />
    <span
      v-if="errors.length > 0 && hasValue"
      class="text-sm text-red-500 first-letter:capitalize"
    >
      {{ errors[0].charAt(0).toUpperCase() + errors[0].slice(1) }}</span
    >
  </div>
</template>
<script>
export default {
  name: "AuthInput",
  props: {
    errors: {
      type: Array,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    hasValue() {
      if (this.value.length === 0) {
        return false;
      }
      return true;
    },
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style>
.error:first-letter {
  text-transform: capitalize;
}
</style>
