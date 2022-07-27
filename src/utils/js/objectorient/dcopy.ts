let obj = {
  a: 1,
  b: {
    name: "b",
    sex: "man",
  },
  c: { vue: "first" },
};

const checkType = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

function deepcopy(obj) {
  let tempobj = {};
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      tempobj[item] =
        checkType(obj[item]) == "Object" ? deepcopy(obj[item]) : obj[item];
    }
  }
  return tempobj;
}
let newobj=deepcopy(obj)
newobj.d='hhhh'
console.log(newobj);
