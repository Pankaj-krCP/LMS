import express from "express";
import { isAdmin, isLogin } from "../../middlewares/auth.middleware";
import {
  addCourseSection,
  addQuestion,
  addReply,
  addReview,
  addReviewReply,
  createCourse,
  createCourseData,
  deleteCourse,
  getAllCourse,
  getSingleEnrollCourse,
  getSingleUnenrollCourse,
  updateComment,
  updateCourse,
  updateCourseData,
  updateCourseSection,
  updateQuestion,
  updateReply,
  updateReview,
} from "../../controllers/course";
import { isEnroll } from "../../middlewares/course.middleware";
const courseRoute = express.Router();

courseRoute.post("/create-course", isLogin, isAdmin, createCourse);
courseRoute.get("/getall-course", getAllCourse);
courseRoute.delete("/delete-course", isLogin, isAdmin, deleteCourse);
courseRoute.post("/add-review/courseId/:id", isLogin, isEnroll, addReview);
courseRoute.put(
  "/update-review/courseId/:courseId/reviewId/:reviewId",
  isLogin,
  updateReview
);
courseRoute.put("/review-reply/reviewId/:reviewId", isLogin, addReviewReply);
courseRoute.put("/update-comment/commentId/:commentId", isLogin, updateComment);
courseRoute.put("/update-course/:id", isLogin, isAdmin, updateCourse);
courseRoute.post("/add-section/:id", isLogin, isAdmin, addCourseSection);
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
courseRoute.post("/add-question/courseId/:id", isLogin, isEnroll, addQuestion);
courseRoute.put(
  "/update-question/questionId/:questionId",
  isLogin,
  updateQuestion
);
courseRoute.post(
  "/add-reply/courseId/:id/questionId/:questionId",
  isLogin,
  isEnroll,
  addReply
);
courseRoute.put("/update-reply/replyId/:replyId", isLogin, updateReply);
courseRoute.get(
  "/getsingle-enroll-course/:id",
  isLogin,
  isEnroll,
  getSingleEnrollCourse
);
courseRoute.get("/getsingle-unenroll-course/:id", getSingleUnenrollCourse);

export default courseRoute;
