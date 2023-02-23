import remarkParse from "remark-parse";
import remarkDirective from "remark-directive";
import { read, write } from "to-vfile";
import {unified} from "unified"
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit"

main();

async function main(){
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read('markdown.md'))

  file.basename = "output.html";
  await write(file);
  console.log(String(file));
}

function myRemarkPlugin() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'youtube') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (node.type === 'textDirective') file.fail('Text directives for `youtube` not supported', node)
        if (!id) file.fail('Missing video id', node)

        data.hName = 'iframe'
        data.hProperties = {
          src: 'https://www.youtube.com/embed/' + id,
          width: "100%",
          height: "100%",
          frameBorder: 0,
          allow: 'picture-in-picture',
          allowFullScreen: true
        }
      }
    })
  }
}