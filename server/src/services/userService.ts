import User from "../models/User";
import { Token } from "../types/Token";
import { UserData, UserType } from "../types/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const getUser = (userId: string): Promise<UserType | null> =>
    User.findById(userId).select("-password");

const register = async (userData: UserData): Promise<Token> => {
    const user: UserType | null = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error("User already exists");
    }

    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords mismatch!");
    }

    const newUser: UserType = await User.create(userData);

    return generateAccessToken(newUser);
};

const login = async (userData: UserData): Promise<Token> => {
    const user: UserType | null = await User.findOne({ email: userData.email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isValid: boolean = await bcrypt.compare(
        userData.password,
        user.password
    );

    if (!isValid) {
        throw new Error("Invalid email or password");
    }

    return generateAccessToken(user);
};

function generateAccessToken(user: UserType): Token {
    const secretKey = process.env.SECRET;
    if (!secretKey) {
        throw new Error("JWT secret key is not defined");
    }
    const accessToken = jwt.sign(
        {
            _id: user._id?.toString(),
            email: user.email,
            username: user.username,
        },
        secretKey,
        { expiresIn: "1d" }
    );

    return {
        _id: user._id?.toString()!,
        email: user.email,
        username: user.username,
        accessToken,
    };
}

export default { register, login, getUser };
