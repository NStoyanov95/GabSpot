import mongoose from "mongoose";

interface PostDocument extends Document {
    author: string;
    authorImage: string;
    content: string;
    image: string;
    comments: string[];
    likes: string;
    createdAt: Date;
    updatedAt?: Date;
}

const postSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            ref: "User",
        },
        authorImage: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Comment",
            },
        ],
        likes: [
            {
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model<PostDocument>("Post", postSchema);

export default Post;
