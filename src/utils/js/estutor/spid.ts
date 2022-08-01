const superagent = require(`superagent`)
const cheerio = require(`cheerio`)
const http = require(`http`)
const url = require(`url`)
const async = require(`async`)
const server = http
  .createServer((req, res) => {
    let count = 0
    const fetchUrl = (offset, callback) => {
      count++
      console.log(`当前并发数：`, count) //测试并发数
      const baseUrl = `http://www.zhihu.com/node/ExploreAnswerListV2`
      const params = {
        offset: offset,
        type: `day`,
      }
      superagent
        .get(baseUrl)
        .set({
          'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36`,
          Referrer: `www.baidu.com`,
        })
        .query({
          params: params,
        })
        .end((err, obj) => {
          if (err) {
            return null
          }
          const $ = cheerio.load(obj.text)
          const items = []
          const baseUrl = `https://www.zhihu.com`
          $(`.explore-feed`).each((index, item) => {
            // Item = this, $(this)转换为jq对象
            const tittle = $(this)
              .find(`h2 a`)
              .text()
              .replace(/[\r\n]/g, ``) //去掉空格
            const href = url.resolve(baseUrl, $(this).find(`h2 a`).attr(`href`))
            const author = $(this).find(`.author-link`).text()
            items.push({
              title: tittle,
              href: href,
              author: author,
            })
          })
          res.end(JSON.stringify(items))
          count--
          console.log(`释放了并发数后，当前并发数：`, count)
          callback(null, JSON.stringify(items))
        })
    }
    const offsets = []
    for (let i = 0; i < 13; i++) {
      offsets.push(i * 5) //生成很多offset参数值
    }
    async.mapLimit(
      offsets,
      5,
      (offset, callback) => {
        fetchUrl(offset, callback)
      },
      (err, result) => {
        res.writeHead(200, { 'Content-Type': `text/plain; charset=utf8` })
        //记得加上编码utf-8 有乱码别找我
        res.end(JSON.stringify(result))
      }
    )
  })
  .listen(9090)
