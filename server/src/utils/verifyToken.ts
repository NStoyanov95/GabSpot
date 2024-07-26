import { Token } from "../types/Token";

const jwt = require("jsonwebtoken");

const verifyToken = (token: string): Token => {
    const secretKey = process.env.SECRET;
    if (!secretKey) {
        throw new Error("JWT secret key is not defined");
    }
    return jwt.verify(token, secretKey);
};
export default verifyToken;
