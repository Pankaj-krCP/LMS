import express from "express";
const userRoute = express.Router();
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { updateUser } from "../../controllers/auth";
import { multerUpload } from "../../middlewares/multer.middleware";
import {
  Me,
  getAllUser,
  getUserById,
  updateProfilePicture,
} from "../../controllers/user";

userRoute.get("/me", isLogin, Me);
userRoute.get("/get-all-user", isLogin, isAdmin, getAllUser);
userRoute.get("/get-single-user", isLogin, isAdmin, getUserById);
userRoute.put("/update-user", isLogin, updateUser);
userRoute.put(
  "/update-profile",
  isLogin,
  multerUpload.single("image"),
  updateProfilePicture
);

export default userRoute;
