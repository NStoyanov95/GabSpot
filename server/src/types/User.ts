import { Schema, Types } from "mongoose";
import { PostType } from "./Post";

export interface UserType {
    _id?: Types.ObjectId;
    username: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    email: string;
    password: string;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
}

export interface UserData {
    username: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    email: string;
    password: string;
    rePassword?: string;
}

export interface UserWithPostsType extends UserData {
    createdPosts: PostType[];
    likedPosts: PostType[];
}
