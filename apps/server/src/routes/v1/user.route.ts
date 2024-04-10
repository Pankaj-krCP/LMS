import express from "express";
const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.json({ message: "Sucessfully reached to user routes" });
});

export default userRoute;
