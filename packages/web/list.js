type = para => {
    return Object.prototype.toString.call(para).slice(8, -1)
}
console.log(type("stirn"))
factorial = num => {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count *= i;
    }
    return count;
}
console.log(factorial(5))

function sum() {
    let sumnum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumnum += arguments[i]
    }
    return sumnum;
}
console.log(sum(4,5,6,7))
function fnn(str,index) {
  return str.includes(index);
}
console.log(fnn('rachel','r'))
