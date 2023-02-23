import remarkParse from "remark-parse";
import remarkDirective from "remark-directive";
import { remark } from "remark";
import { read, write } from "to-vfile";
import {unified} from "unified"
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import {writeFile } from "fs";



main();

async function main(){
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read('markdown.md'))

  file.basename = "output.html";
  await write(file);
  console.log(String(file));
}