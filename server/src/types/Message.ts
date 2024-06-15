import { Types } from "mongoose";

export interface MessageType {
    from: Types.ObjectId;
    to: Types.ObjectId;
    content: string;
    createdAt?: Date;
}
