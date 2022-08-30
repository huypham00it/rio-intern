const nextElementInList = (list, value) => {
  const currIndex = list.indexOf(value);
  const nextIndex = (currIndex + 1) % list.length;
  return list[nextIndex];
};

export default nextElementInList;
