import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("shiva shiva");
});

export { router };
