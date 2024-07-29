import express, { Request, Response } from "express";
import commentService from "../services/commentService";
import isAuth from "../middlewares/isAuth";
import Post from "../models/Post";

const router = express.Router();

router.post("/create/:postId", isAuth, async (req: Request, res: Response) => {
    const { comment: content, author } = req.body;
    const { postId } = req.params;

    try {
        const comment = await commentService.createComment(content, author);

        const post = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: comment._id } },
            { new: true }
        ).populate("comments");

        res.status(200).json(post);
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: "Internal server error" });
    }
});

router.post(
    "/delete/:commentId",
    isAuth,
    async (req: Request, res: Response) => {
        const { commentId } = req.params;
        const { postId } = req.body;
        console.log(req.body);
        console.log(commentId);

        try {
            const deletedComment = await commentService.deleteComment(
                commentId
            );
            const post = await Post.findByIdAndUpdate(
                postId,
                { $pull: { comments: commentId } },
                { new: true }
            );
            res.status(200).json(post);
        } catch (error) {
            console.log(error);

            res.status(500).json({ error: "Internal server error" });
        }
    }
);

export default router;
