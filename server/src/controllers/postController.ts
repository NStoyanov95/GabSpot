import express, { Request, Response } from "express";
import { create, getAllPosts } from "../services/postService";
import { PostData, PostType } from "../types/Post";

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
  const postData: PostType = req.body;
  try {
    const newPost: PostData = await create(postData);
    res.json(newPost);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
});

router.get("/feed", async (req: Request, res: Response) => {
  try {
    const posts: PostData[] = await getAllPosts();
    res.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
});
export default router;
