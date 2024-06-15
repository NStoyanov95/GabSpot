import { Types } from "mongoose";

export interface UserType {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    rePassword?: string;
}

export interface UserData {
    username: string;
    email: string;
    password: string;
    rePassword?: string;
}
