import express, { Request, Response } from "express";
import messageService from "../services/messageService";
import { MessageData } from "../types/Message";

const router = express.Router();

router.post("/send", async (req: Request, res: Response) => {
    const messageData: MessageData = req.body;
    try {
        const message = await messageService.create(messageData);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
