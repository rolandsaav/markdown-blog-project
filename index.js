const remark = require('remark');
const remarkOembed = require('remark-oembed');
const vfile = require('to-vfile');

const src = vfile.readSync('./markdown.md')

console.log(src)




remark()
  .use(require('remark-html'))
  .use(remarkOembed)
  .process(src, (err, file) => vfile.writeSync(file));