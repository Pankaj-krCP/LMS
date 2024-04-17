import express from "express";
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import { createCourse } from "../../controllers/course";
const courseRoute = express.Router();

courseRoute.post("/create-course", isLogin, isAdmin, createCourse);

export default courseRoute;
