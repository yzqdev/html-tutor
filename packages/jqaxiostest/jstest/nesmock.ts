let Mock = require('mockjs')
const axios = require(`axios`);

Mock.mock('https://www.test.com',{
  "userInfo|4":[{    //生成|num个如下格式名字的数据
    "id|+1":1,   //数字从当前数开始后续依次加一
    "name":"@cname",    //名字为随机中文名字
    "ago|18-28":25,     //年龄为18-28之间的随机数字
    "sex|1":["男","女"],    //性别是数组中的一个，随机的
    "job|1":["web","UI","python","php"]    //工作是数组中的一个
  }]
})

axios
  .get(
    `https://www.test.com`
  )
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });
