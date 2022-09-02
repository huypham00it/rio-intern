import { computed } from "vue";

const useConfirmRoute = (routeName) => {
  const route = this.$route;
  return computed(() => route.name === routeName);
};

export default useConfirmRoute;
