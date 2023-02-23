import express from "express";
import mdToHtml from "./index.mjs";

const app = express();

app.get("/", async (req, res) => {
  const data = await mdToHtml("markdown.md");

  await res.send(data)
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);