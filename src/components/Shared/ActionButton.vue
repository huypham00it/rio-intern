<template>
  <button :class="buttonType">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonType() {
      return [this.type];
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium border-0;
}

.primary {
  @apply bg-brand-blue-1 rounded text-white hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
