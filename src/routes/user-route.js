const { Router } = require("express");
const UserController = require("../controllers/User-controller");
const UserRepository = require("../repositories/User-repository");

const userRouter = Router();

const userController = new UserController();
const userRepository = new UserRepository();

userRouter.post(
  "/api/v2/users",
  userController.userUseCase.userRepository.acaoRepository1
);

module.exports = userRouter;
