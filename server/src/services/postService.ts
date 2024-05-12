import Post from "../models/Post";
import { PostData, PostType } from "../types/Post";

export const create = (postData: PostType): Promise<PostData> =>
  Post.create(postData);

export const getAllPosts = (): Promise<PostData[]> => Post.find();

export const getSinglePost = (postId: string): Promise<PostData | null> =>
  Post.findById(postId);

export const deletePost = (postId: string): Promise<PostData | null> =>
  Post.findByIdAndDelete(postId);
