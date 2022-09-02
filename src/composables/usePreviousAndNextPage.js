import { computed } from "vue";

const usePreviousAndNextPage = (currentPage, totalPage) => {
  const previousPage = computed(() =>
    currentPage > 1 ? currentPage - 1 : undefined
  );

  const nextPage = computed(() =>
    currentPage < totalPage ? currentPage + 1 : undefined
  );

  return { previousPage, nextPage };
};

export default usePreviousAndNextPage;
