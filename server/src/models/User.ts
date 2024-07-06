import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    following: mongoose.Types.ObjectId[];
    followers: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

userSchema.pre<UserDocument>("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

export default User;
