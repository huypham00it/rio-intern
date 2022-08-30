<template>
  <input
    type="text"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    class="focus:outline-none w-full"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  emits: ["input"],
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>
