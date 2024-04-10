import express from "express";
import connectDB from "./config/db.conf";
export const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
  connectDB();
});
