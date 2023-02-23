import { Router } from "express";

export const testRouter = Router();

testRouter.get("/", (req, res) => {
  res.send("This is functioning.")
})

