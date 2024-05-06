import User from "../models/User";
import { Token } from "../types/Token";
import { UserData, UserType } from "../types/User";
import jwt from "jsonwebtoken";

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

function generateAccessToken(user: UserType): Token {
  const secretKey = process.env.JWT_SECRET;
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
