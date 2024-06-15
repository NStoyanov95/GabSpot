import mongoose, { Document, Schema, Types } from "mongoose";

interface MessageDocument extends Document {
    from: Types.ObjectId;
    to: Types.ObjectId;
    content: string;
    createdAt?: Date;
}

const messageSchema = new mongoose.Schema(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model<MessageDocument>("Message", messageSchema);

export default Message;
