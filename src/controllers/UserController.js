const { request, response } = require("express");
const UserUseCase = require("../useCases/UserUseCase.js");
const UserRepository = require("../repositories/UserRepository.js");

class UserController {
  userRepository = new UserRepository();
  userUseCase = new UserUseCase();

  handleCreateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const createdUser = await this.userUseCase.executeCreateUser(
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
  };

  handlefindAllUsers = async (req, res) => {
    try {
      const listAll = await this.userUseCase.executeFindAllUser();
      return res.status(200).json(listAll);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  };
}

module.exports = UserController;
