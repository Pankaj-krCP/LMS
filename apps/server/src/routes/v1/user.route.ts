import express from "express";
const userRoute = express.Router();
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { getAllUser } from "../../controllers/user";

userRoute.get("/getalluser", isLogin, isAdmin, getAllUser);

export default userRoute;
