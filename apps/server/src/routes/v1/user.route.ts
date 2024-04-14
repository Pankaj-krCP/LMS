import express from "express";
const userRoute = express.Router();
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { getAllUser } from "../../controllers/user";

userRoute.get("/get-all-user", isLogin, isAdmin, getAllUser);
// userRoute.get("/get-single-user", isLogin, isAdmin, getAllUser);
// userRoute.get("/me", isLogin, isAdmin, getAllUser);

export default userRoute;
