import express from "express";
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  updateCourse,
} from "../../controllers/course";
const courseRoute = express.Router();

courseRoute.post("/create-course", isLogin, isAdmin, createCourse);
courseRoute.get("/getall-course", isLogin, isAdmin, getAllCourse);
courseRoute.delete("/delete-course", isLogin, isAdmin, deleteCourse);
courseRoute.put("/update-course/:id", isLogin, isAdmin, updateCourse);

export default courseRoute;
