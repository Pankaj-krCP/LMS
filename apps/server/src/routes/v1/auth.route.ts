import express from "express";
const authRoute = express.Router();
import { signup } from "../../controllers/auth.controller";

authRoute.post("/signup", signup);

export default authRoute;
