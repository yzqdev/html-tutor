/*
* @Author: yanni
* @Date:   2019-02-24 15:54:32
* @Last Modified by:   yanni
* @Last Modified time: 2019-02-24 15:55:43
*/
const handle = (fn, interval) => {
    let lastTime = 0;
    return function () {
        let now = Date.now();
        if (now - lastTime > interval) {
            fn.apply(this, arguments);
            lastTime = now
        }
    }
};
console.log(handle());
