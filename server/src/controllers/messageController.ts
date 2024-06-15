import express, { Request, Response } from "express";
import messageService from "../services/messageService";
import { MessageData, MessageType } from "../types/Message";

const router = express.Router();

router.post("/send", async (req: Request, res: Response) => {
    const messageData: MessageData = req.body;
    try {
        const message: MessageType = await messageService.create(messageData);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const messages: MessageType[] | null =
            await messageService.getMessagesForUser(userId);
        res.status(200).json(messages);
    } catch (error) {}
});

export default router;
