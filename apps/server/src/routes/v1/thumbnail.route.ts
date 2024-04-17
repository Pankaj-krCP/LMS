import express from "express";
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { multerUpload } from "../../middlewares/multer.middleware";
import {
  deleteThumbnail,
  getAllThumbnail,
  uploadThumbnail,
} from "../../controllers/thumbnail";
const thumbnailRoute = express.Router();

thumbnailRoute.post(
  "/upload-thumbnail",
  isLogin,
  isAdmin,
  multerUpload.single("thumbnail"),
  uploadThumbnail
);
thumbnailRoute.delete("/delete-thumbnail", isLogin, isAdmin, deleteThumbnail);
thumbnailRoute.get("/getall-thumbnail", isLogin, isAdmin, getAllThumbnail);

export default thumbnailRoute;
