import express, { Request, Response } from "express";
import postService from "../services/postService";
import { PostData, PostType } from "../types/Post";
import User from "../models/User";
import { UserType } from "../types/User";
import isAuth from "../middlewares/isAuth";
import { CustomRequest } from "../types/CustomRequest";

const router = express.Router();

router.post("/create", isAuth, async (req: CustomRequest, res: Response) => {
    const postData: PostType = req.body;
    const userId: string | undefined = req.userId;

    const author: UserType | null = await User.findById(userId);
    if (!author) {
        return res.status(404).send({ message: "Author not found" });
    }
    postData.authorImage = author.profileImage;
    postData.author = author.username;

    try {
        const newPost: PostData = await postService.create(postData);
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
        const posts: PostData[] = await postService.getAllPosts();
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
        const post: PostData | null = await postService.getSinglePost(postId);

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
        const post: PostData | null = await postService.deletePost(postId);
        res.json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});

router.post("/comment/:postId", async (req: Request, res: Response) => {
    const postId: string = req.params.postId;
    const comment: string = req.body.comment;
    try {
        const post: PostData | null = await postService.commentPost(
            postId,
            comment
        );
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
