import { Schema, Types } from "mongoose";

export interface UserType {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
}

export interface UserData {
    username: string;
    email: string;
    password: string;
    rePassword?: string;
}
