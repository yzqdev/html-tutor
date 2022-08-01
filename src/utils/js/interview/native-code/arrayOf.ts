if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments)
  }
}

// Array.of(7);       // [7]
// Array.of(1, 2, 3); // [1, 2, 3]
//
// Array(7);          // [ , , , , , , ]
// Array(1, 2, 3);    // [1, 2, 3]
