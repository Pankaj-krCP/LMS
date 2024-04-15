import express from "express";
const userRoute = express.Router();
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { Me, getAllUser, getUserById } from "../../controllers/user";
import { updateUser } from "../../controllers/auth";

userRoute.get("/me", isLogin, Me);
userRoute.get("/get-all-user", isLogin, isAdmin, getAllUser);
userRoute.get("/get-single-user", isLogin, isAdmin, getUserById);
userRoute.put("/update-user", isLogin, updateUser);

export default userRoute;
