import { Router } from "express";
import UserController from "../controllers/user-controller";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/api/users", userController.findAllMethod);
userRouter.post("/api/users", userController.createMethod);

export default userRouter;
