const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRouter = Router();

const userController = new UserController();

userRouter.post("/api/v2/users", userController.handleCreateUser);
userRouter.get("/api/v2/users", userController.handlefindAllUsers);
userRouter.patch("/api/v2/users/:id", userController.handleUpdateUser);

module.exports = userRouter;
