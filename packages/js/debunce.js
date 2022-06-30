const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    console.log(this);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

function con(...args) {
  console.log(args);
  console.log("hello");
}
throttle(con, 2000);
