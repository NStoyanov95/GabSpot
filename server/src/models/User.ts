import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    username: {
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
});

userSchema.pre<UserDocument>("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

export default User;
