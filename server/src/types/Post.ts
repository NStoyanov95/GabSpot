import { Types } from "mongoose";

export interface PostType {
  author: Types.ObjectId;
  content: string;
  image: string;
  comments: string[];
  likes: Types.ObjectId[];
}

export interface PostData extends PostType {
  createdAt: Date;
  updatedAt?: Date;
}
