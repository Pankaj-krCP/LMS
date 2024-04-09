import "dotenv/config";
import { app } from "./server";

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
