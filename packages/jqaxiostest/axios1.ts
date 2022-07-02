const Mock = require(`mockjs`);
const axios = require(`axios`),
  data8 = Mock.mock(/\.json/, `get`, {
    name: `@name`,
    "boolean": Mock.Random.boolean(), // 返回一个随机的布尔值。
    natural: Mock.Random.natural(1, 100), // 返回一个随机的自然数（大于等于 0 的整数）
    integer: Mock.Random.integer(1, 100), // 生成1到100之间的整数
    float: Mock.Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    character: Mock.Random.character(), // 生成随机字符,可加参数定义规则
    string: Mock.Random.string(`壹贰叁肆伍陆柒捌玖拾`, 3, 5), //返回一个随机字符串。
    range: Mock.Random.range(0, 10, 2), // 生成一个随机数组

    //Date
    date: Mock.Random.date(`yyyy-MM-dd`), // 生成一个随机日期,可加参数定义日期格式
    time: Mock.Random.time(`HH:mm:ss`), //获取一个随机时间
    datetime: Mock.Random.datetime(), // 返回一个随机的日期和时间字符串。
    now: Mock.Random.now(), // 返回当前的日期和时间字符串。

    //Image
    image: Mock.Random.image(`200x100`, `#00405d`, `#FFF`, `Mock.js`), //生成一个随机的图片地址。
    // DataImage: Mock.Random.dataImage(Mock.Random.size, `hello`), //生成一段随机的 Base64 图片编码。

    //Color
    color: Mock.Random.color(), //随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
    hex: Mock.Random.hex(), //随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
    rgb: Mock.Random.rgb(), //随机生成一个有吸引力的颜色，格式为 'rgb(r, g, b)'。
    rgba: Mock.Random.rgba(), //随机生成一个有吸引力的颜色，格式为 'rgba(r, g, b, a)'。
    hsl: Mock.Random.hsl(), //随机生成一个有吸引力的颜色，格式为 'hsl(h, s, l)'。

    //Text
    paragraph: Mock.Random.paragraph(3, 7), // 随机生成一段文本。
    cparagraph: Mock.Random.cparagraph(1, 3), // 随机生成一段中文文本。
    sentence: Mock.Random.sentence(1, 3), // 随机生成一个句子，第一个单词的首字母大写。
    csentence: Mock.Random.csentence(1, 3), // 随机生成一段中文文本。
    word: Mock.Random.word(1, 3), // 随机生成一个单词。
    cword: Mock.Random.cword(`零一二三四五六七八九十`, 10, 15), //生成中文10到15个
    title: Mock.Random.title(3, 5), // 随机生成一句标题，其中每个单词的首字母大写。
    ctitle: Mock.Random.ctitle(3, 7), // 随机生成一句中文标题。

    //Name
    first: Mock.Random.first(), // 随机生成一个常见的英文名。
    last: Mock.Random.last(), // 随机生成一个常见的英文姓。
    name: Mock.Random.name(), // 随机生成一个常见的英文姓名。
    cfirst: Mock.Random.cfirst(), // 随机生成一个常见的中文名。
    clast: Mock.Random.clast(), // 随机生成一个常见的中文姓。
    cname: Mock.Random.cname(), //随机生成一个常见的中文姓名。

    //Web
    url: Mock.Random.url(`http`, `baidu.com`), // 随机生成一个 URL。
    protocol: Mock.Random.protocol(), //随机生成一个 URL 协议
    domain: Mock.Random.domain(), //随机生成一个域名。
    tld: Mock.Random.tld(), //随机生成一个顶级域名
    email: Mock.Random.email(`qq.com`), //随机生成一个邮箱
    ip: Mock.Random.ip(), //随机生成一个 IP 地址。

    //Address
    region: Mock.Random.region(), //随机生成一个（中国）大区。
    province: Mock.Random.province(), //随机生成一个（中国）省（或直辖市、自治区、特别行政区）
    city: Mock.Random.city(true), //布尔值。指示是否生成所属的省。
    county: Mock.Random.county(true), //随机生成一个（中国）县。
    zip: Mock.Random.zip(), //随机生成一个邮政编码（六位数字）
    address: Mock.Random.province(), // 生成地址

    //Helper
    capitalize: Mock.Random.capitalize(`hello`), //把字符串的第一个字母转换为大写。
    upper: Mock.Random.upper(`hello`), //把字符串转换为大写。
    lower: Mock.Random.lower(`HELLO`), //把字符串转换为小写。
    pick: Mock.Random.pick([`a`, `e`, `i`, `o`, `u`]), //从数组中随机选取一个元素，并返回。
    shuffle: Mock.Random.shuffle([`a`, `e`, `i`, `o`, `u`]), //打乱数组中元素的顺序，并返回。

    //Miscellaneous
    guid: Mock.Random.guid(), //随机生成一个 GUID。
    id: Mock.Random.id(), //随机生成一个 18 位身份证。
    increment: Mock.Random.increment(2) //生成一个全局的自增整数。自增为2
  });

Mock.mock(/\.json/, `post`, options => options.type);
axios
  .get(`h.json`, { page: 1, pagesize: 10 })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err.code);
  });
