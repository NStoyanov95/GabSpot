import Post from "../models/Post";
import { PostData, PostType } from "../types/Post";
import { UserType } from "../types/User";

const create = (postData: PostType): Promise<PostData> => Post.create(postData);

const getAllPosts = (): Promise<PostData[]> =>
    Post.find().sort({ createdAt: -1 });

const getSinglePost = (postId: string): Promise<PostData | null> =>
    Post.findById(postId);

const deletePost = (postId: string): Promise<PostData | null> =>
    Post.findByIdAndDelete(postId);

const commentPost = (
    postId: string,
    comment: string
): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, { $push: { comments: comment } });

const likePost = (postId: string, userId: string): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, { $push: { likes: userId } }, { new: true });

const dislikePost = (
    postId: string,
    userId: string
): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, { $pull: { likes: userId } }, { new: true });

const editPost = (
    postId: string,
    postData: PostType
): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, postData, { new: true });

export default {
    create,
    getAllPosts,
    getSinglePost,
    deletePost,
    commentPost,
    editPost,
    likePost,
    dislikePost,
};
