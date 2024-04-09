import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app } from "./server";
import express, { NextFunction } from "express";

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
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
