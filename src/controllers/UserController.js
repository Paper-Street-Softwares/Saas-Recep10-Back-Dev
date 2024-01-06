const { request, response } = require("express");
const UserUseCase = require("../useCases/UserUseCase.js");
const UserRepository = require("../repositories/UserRepository.js");
const prisma = require("../database/prisma/prismaClient.js");

class UserController {
  async criar(req, res) {
    const { name, email, password } = req.body;

    new UserRepository().createUser(name, email, password);

    return res.status(200).json({ status: "created." });
  }
}
module.exports = UserController;
