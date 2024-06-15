import express from "express";

import userController from "./controllers/userController";
import postController from "./controllers/postController";
import messageController from "./controllers/messageController";

const router = express.Router();

router.use("/users", userController);
router.use("/posts", postController);
router.use("/messages", messageController);

export default router;
