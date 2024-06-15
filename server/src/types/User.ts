import { Document, Types } from "mongoose";

export interface UserDocument extends Document {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
}

export interface UserRegistrationData {
    username: string;
    email: string;
    password: string;
    rePassword: string;
}
