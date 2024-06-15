import { Types } from "mongoose";

export interface MessageType {
    _id: Types.ObjectId;
    from: Types.ObjectId;
    to: Types.ObjectId;
    content: string;
    createdAt?: Date;
}

export interface MessageData {
    from: Types.ObjectId;
    to: Types.ObjectId;
    content: string;
}
