const { request, response } = require("express");
const UserUseCase = require("../useCases/UserUseCase.js");
const UserRepository = require("../repositories/UserRepository.js");

class UserController {
  async handleCreateUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const createdUser = await new UserUseCase().executeCreateUser(
        name,
        email,
        password,
        res
      );

      if (createdUser) {
        return res.status(201).json({ user: createdUser });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

  async handlefindAllUsers(req, res) {
    try {
      const listAll = await new UserRepository().findAllUser();

      if (listAll) {
        return res.status(200).json(listAll);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

module.exports = UserController;
