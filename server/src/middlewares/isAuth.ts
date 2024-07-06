import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../types/CustomRequest";

interface CustomJwtPayload extends jwt.JwtPayload {
    _id: string;
}
const isAuth = (
    req: CustomRequest,
    res: Response,
    next: NextFunction
): void => {
    const secretKey = process.env.SECRET;
    if (!secretKey) {
        throw new Error(
            "SECRET_KEY is not defined in the environment variables"
        );
    }
    const authToken = req.cookies["auth-cookie"];

    try {
        const decodedToken = jwt.verify(
            authToken,
            secretKey
        ) as CustomJwtPayload;

        if (!decodedToken) {
            res.status(401).send({ error: "Unauthorized" });
            return;
        }
        req.userId = decodedToken._id;
        next();
    } catch (error) {
        res.status(401).send({ error: "Unauthorized" });
    }
};

export default isAuth;
