import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app } from "./server";
import express from "express";
import errorHandler from "./utils/errorHandler.helper";
import errorMiddleware from "./middlewares/error.middleware";
import { authRoute, userRoute } from "./routes/v1";

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.all("*", (req, res, next) => {
  throw new errorHandler(`Route ${req.originalUrl} not found`, 404);
});

app.use(errorMiddleware);
