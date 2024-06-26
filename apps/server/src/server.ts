import express from "express";
import fs from "fs";
import path from "path";
import connectDB from "./config/db.conf";
import { redisClient } from "./config/redis.conf";
import cloudinary from "./config/cloudinary.config";
export const app = express();

// Create temp/my-upload folder if it doesn't exist
const tempUploadDir = path.join(__dirname, "public");
if (!fs.existsSync(tempUploadDir)) {
  fs.mkdirSync(tempUploadDir);
  fs.chmodSync(tempUploadDir, 0o766);
}

cloudinary;

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
  connectDB();
  redisClient();
  cloudinary;
});
