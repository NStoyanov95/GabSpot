import express from "express";

import userController from "./controllers/userController";
import postController from "./controllers/postController";
import messageController from "./controllers/messageController";
import commentController from "./controllers/commentController";

const router = express.Router();

router.use("/users", userController);
router.use("/posts", postController);
router.use("/messages", messageController);
router.use("/comments", commentController);

export default router;
