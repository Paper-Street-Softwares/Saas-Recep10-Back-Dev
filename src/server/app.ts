import express from "express";
import router from "../routes/routes";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  return res.status(200).json({ status: "OK" });
});

export default app;
