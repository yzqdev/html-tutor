const arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 8, 9];

const intersection = arr1.filter(function(val) {
  return arr2.indexOf(val) > -1;
});
console.log(intersection); //[5, 8, 9]
