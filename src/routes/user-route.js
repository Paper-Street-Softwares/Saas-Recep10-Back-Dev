const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRouter = Router();

const userController = new UserController();

userRouter.post("/api/v2/users", userController.criar);

module.exports = userRouter;
