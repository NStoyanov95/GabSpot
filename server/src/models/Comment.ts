import mongoose, { Document, Schema, Types } from "mongoose";

interface CommentDocument extends Document {
    author: String;
    content: string;
    createdAt?: Date;
}

const commentSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
