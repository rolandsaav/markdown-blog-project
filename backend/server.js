import express from "express";
import mdToHtml from "./index.mjs";

const app = express();

app.get("/", async (req, res) => {
  console.log("Requested")
  const data = await mdToHtml("markdown.md");

  await res.send(data)
})

app.listen(4000, () =>
  console.log('Example app listening on port 4000!'),
);