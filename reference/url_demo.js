const url = require('url')
const myUrl = new URL('http://google.com:7800/search.html?id=100&status=active')

console.log(myUrl.href)

console.log(myUrl.host)

console.log(myUrl.hostname)