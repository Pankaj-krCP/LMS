import express from "express";
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import {
  addCourseSection,
  createCourse,
  createCourseData,
  deleteCourse,
  getAllCourse,
  getSingleEnrollCourse,
  getSingleUnenrollCourse,
  updateCourse,
  updateCourseData,
  updateCourseSection,
} from "../../controllers/course";
import { isEnroll } from "../../middlewares/course.middleware";
const courseRoute = express.Router();

courseRoute.post("/create-course", isLogin, isAdmin, createCourse);
courseRoute.get("/getall-course", getAllCourse);
courseRoute.delete("/delete-course", isLogin, isAdmin, deleteCourse);
courseRoute.put("/update-course/:id", isLogin, isAdmin, updateCourse);
courseRoute.put("/add-section/:id", isLogin, isAdmin, addCourseSection);
courseRoute.put(
  "/update-section/:courseId/sections/:sectionId",
  isLogin,
  isAdmin,
  updateCourseSection
);
courseRoute.post(
  "/create-coursedata/:courseId/sections/:sectionId",
  isLogin,
  isAdmin,
  createCourseData
);
courseRoute.put("/update-coursedata/:id", isLogin, isAdmin, updateCourseData);
courseRoute.get(
  "/getsingle-enroll-course/:id",
  isLogin,
  isEnroll,
  getSingleEnrollCourse
);
courseRoute.get("/getsingle-unenroll-course/:id", getSingleUnenrollCourse);

export default courseRoute;
