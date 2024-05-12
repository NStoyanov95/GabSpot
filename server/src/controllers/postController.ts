import express, { Request, Response } from "express";
import {
  create,
  deletePost,
  getAllPosts,
  getSinglePost,
} from "../services/postService";
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

router.get("/details/:postId", async (req: Request, res: Response) => {
  const postId: string = req.params.postId;

  try {
    const post: PostData | null = await getSinglePost(postId);

    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
});

router.delete("/delete/:postId", async (req: Request, res: Response) => {
  const postId: string = req.params.postId;
  try {
    const post: PostData | null = await deletePost(postId);
    res.json(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
});
export default router;
