export const scrollTo = el => {
  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const getDimensions = el => {
  const { height } = el.getBoundingClientRect();
  // 200 added to each value, so there is a scroll delay when switching to new ref
  const offsetTop = el.offsetTop - 200;
  const offsetBottom = offsetTop + height - 200;

  return {
    offsetTop,
    offsetBottom,
  };
};
