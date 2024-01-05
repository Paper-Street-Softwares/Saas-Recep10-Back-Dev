const { Router } = require("express");
const UserController = require("../controllers/User-controller");

const userRouter = Router();

const userController = new UserController();

userRouter.post("/api/v2/users");

module.exports = userRouter;
