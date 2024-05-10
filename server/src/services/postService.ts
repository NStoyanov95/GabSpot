import Post from "../models/Post";
import { PostData, PostType } from "../types/Post";

export const create = (postData: PostType): Promise<PostData> =>
  Post.create(postData);

export const getAllPosts = (): Promise<PostData[]> => Post.find();
