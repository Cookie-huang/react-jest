//   const inputElem = wrapper.find("[data-test='input']");

export const findTestWrapper = (wrapper, tag) => {
  return wrapper.find(`[data-test="${tag}"]`);
};
