Array.prototype.myFlat = function(num = 1) {
  if (Array.isArray(this)) {
    let arr = [];
    if (!Number(num) || Number(num) < 0) {
      return this;
    }
    this.forEach(item => {
      if (Array.isArray(item)) {
        let count = num;
        arr = arr.concat(item.myFlat(--count));
      } else {
        arr.push(item);
      }
    });
    return arr;
  } else {
    throw this + ".flat is not a function";
  }
};
