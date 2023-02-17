var fs = require('fs')
var remark = require('remark')
var oembed = require('@agentofuser/remark-oembed')

remark()
  .use(oembed)
  .process(fs.readFileSync('demo.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })