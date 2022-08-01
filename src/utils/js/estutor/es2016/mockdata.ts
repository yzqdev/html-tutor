import Mock from 'mockjs'
import axios from 'axios'
const { Random } = Mock
// 使用mockjs模拟数据
Mock.mock(/\.json/, {
  'list|1-10': [
    {
      'id|+1': 1, //属性 id 是一个自增数，起始值为 1，每次增 1
      email: `@EMAIL`, //随机邮箱地址
    },
  ],
})
axios.get(`hel.json`).then((res) => {
  console.log(res.data)
})
