const { Router } = require("express");
const UserController = require("../controllers/User-controller.js");

const userRouter = Router();

const userController = new UserController();

userRouter.post("/api/v2/users", userController.createdUser);

module.exports = userRouter;
