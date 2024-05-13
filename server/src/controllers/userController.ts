import express, { Request, Response } from "express";
import { UserData } from "../types/User";

import userService from "../services/userService";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const userData: UserData = req.body;

  try {
    const { _id, email, username, accessToken } = await userService.register(
      userData
    );
    res.cookie("auth-cookie", accessToken, { httpOnly: true, secure: true });
    res.send({ email, username, _id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(403).send({ error: error.message });
    } else {
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const userData: UserData = req.body;

  try {
    const { _id, email, username, accessToken } = await userService.login(
      userData
    );
    res.cookie("auth-cookie", accessToken, { httpOnly: true, secure: true });
    res.send({ email, username, _id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(403).send({ error: error.message });
    } else {
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});

export default router;
