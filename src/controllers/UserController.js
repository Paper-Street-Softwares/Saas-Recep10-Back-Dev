const { request, response } = require("express");
const UserUseCase = require("../useCases/UserUseCase");
const prisma = require("../database/prisma/prismaClient");

class UserController {
  userUseCase = new UserUseCase();

  constructor() {}

  async criar(request, response) {
    const { name, email, password } = request.body;

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // await this.userUseCase.userRepository.createUser(name, email, password);

    return response.status(200).json({ status: "created." });
  }
}

// const teste = new UserController();

// teste.criar("ab", "ju", "ja");

module.exports = UserController;
