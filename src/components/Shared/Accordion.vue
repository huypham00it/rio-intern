<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="toggle"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot>Whoops, somebody forgot to populate me!</slot>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "Accordion",
  setup() {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );
    return { toggle, isOpen, caretIcon };
  },
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>
