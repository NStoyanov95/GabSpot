import express from "express";

import userController from "./controllers/userController";
import postController from "./controllers/postController";

const router = express.Router();

router.use("/users", userController);
router.use("/posts", postController);

export default router;
