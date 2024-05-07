import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import router from "./routes";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => console.error("Database connection error", err));

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use(router);

const port: string = process.env.PORT || "3030";

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
