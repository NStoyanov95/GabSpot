import express, { Request, Response } from "express";
import { UserData, UserType } from "../types/User";

import userService from "../services/userService";
import { CustomRequest } from "../types/CustomRequest";
import isAuth from "../middlewares/isAuth";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const users: UserType[] | null = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ error: "An unknown error occurred" });
    }
});

router.get("/profile/:userId", async (req: Request, res: Response) => {
    const userId: string = req.params.userId;

    try {
        const user: UserType | null = await userService.getUser(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(403).send({ error: error.message });
        } else {
            res.status(500).send({ error: "An unknown error occurred" });
        }
    }
});

router.post("/register", async (req: Request, res: Response) => {
    const userData: UserData = req.body;

    try {
        const { _id, email, username, accessToken } =
            await userService.register(userData);
        res.cookie("auth-cookie", accessToken, {
            httpOnly: true,
            secure: true,
        });
        res.send({ email, username, _id, accessToken });
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
        res.cookie("auth-cookie", accessToken, {
            httpOnly: true,
            secure: true,
        });
        res.send({ email, username, _id, accessToken });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(403).send({ error: error.message });
        } else {
            res.status(500).send({ error: "An unknown error occurred" });
        }
    }
});

router.get(
    "/currentUser",
    isAuth,
    async (req: CustomRequest, res: Response) => {
        const userId: string | undefined = req.userId;
        if (!userId) {
            return res.status(404).send({ message: "User not found" });
        }
        try {
            const user: UserType | null = await userService.getUser(userId);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            res.send(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(403).send({ error: error.message });
            } else {
                res.status(500).send({ error: "An unknown error occurred" });
            }
        }
    }
);

export default router;
