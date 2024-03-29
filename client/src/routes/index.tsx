import express, { Request, Response } from "express";

const router = express.Router();

router.get("*", (req: Request, res: Response) =>
  res.render("index", { title: "happy-day" }),
);

export default router;
