/*
* @Author: frozen521
* @Date:   2019-03-16 22:25:47
* @Last Modified by:   frozen521
* @Last Modified time: 2019-03-16 22:25:58
*/
/*阿里面试题*/
①function Person(){
    ②getAge = function (){
        console.log(10)
    }
    ③return this;
}

④Person.getAge = function (){
    console.log(20);
}

⑤Person.prototype.getAge = function (){
    console.log(30);
}

⑥let getAge = function (){
    console.log(40)
}

⑦function getAge(){
    console.log(50)
}


Q1：Person.getAge() // 20
Q2：getAge() // 40
Q3：Person().getAge() // 10
Q4：getAge() // 10
Q5：new Person().getAge() // 30
Q6：new Person.getAge(); // 20
