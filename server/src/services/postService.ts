import { get } from "http";
import Post from "../models/Post";
import { PostData, PostType } from "../types/Post";

const create = (postData: PostType): Promise<PostData> => Post.create(postData);

const getAllPosts = (): Promise<PostData[]> =>
    Post.find().sort({ createdAt: -1 });

const getSinglePost = (postId: string): Promise<PostData | null> =>
    Post.findById(postId);

const deletePost = (postId: string): Promise<PostData | null> =>
    Post.findByIdAndDelete(postId);

export default { create, getAllPosts, getSinglePost, deletePost };
