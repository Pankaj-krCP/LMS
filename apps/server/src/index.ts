import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app } from "./server";
import express from "express";
import errorHandler from "./utils/errorHandler";
import errorMiddleware from "./middleware/error";

//body parser middleware
app.use(express.json({ limit: "50mb" }));

//cookie parser middleware
app.use(cookieParser());

//cors middleware
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.all("*", (req, res, next) => {
  throw new errorHandler(`Route ${req.originalUrl} not found`, 404);
});

app.use(errorMiddleware);
