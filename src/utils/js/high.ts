const strArray = ["JavaScript", "PHP", "JAVA", "C", "Python"];
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});

console.log(lenArray); //[10,3,4,1,6]
