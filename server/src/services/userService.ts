import User from "../models/User";
import { UserData, UserType } from "../types/User";

const register = async (userData: UserData): Promise<UserType> => {
  const user: UserType | null = await User.findOne({ email: userData.email });

  if (user) {
    throw new Error("User already exists");
  }

  if (userData.password !== userData.rePassword) {
    throw new Error("Passwords mismatch!");
  }

  const newUser: UserType = await User.create(userData);

  return newUser;
};
