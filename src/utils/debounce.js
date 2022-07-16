let timer;
const debounce = (fn, delay) => {
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
};

export default debounce;
