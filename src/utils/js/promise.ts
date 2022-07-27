function Promise(excutor) {
  let self = this;
  self.onResolvedCallback = [];
  function resolve(value) {
    setTimeout(() => {
      self.data = value;
      self.onResolvedCallback.forEach(callback => callback(value));
    });
  }
  excutor(resolve.bind(self));
}
Promise.prototype.then = function(onResolved) {
  let self = this;
  return new Promise(resolve => {
    self.onResolvedCallback.push(function() {
      let result = onResolved(self.data);
      if (result instanceof Promise) {
        result.then(resolve);
      } else {
        resolve(result);
      }
    });
  });
};
