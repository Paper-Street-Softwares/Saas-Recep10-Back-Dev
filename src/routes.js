import { Router } from "express";
import userRouter from "./routes/user-router";

const router = Router();

router.use(userRouter);

export default router;
