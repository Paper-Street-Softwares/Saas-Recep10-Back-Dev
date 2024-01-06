const { request, response } = require("express");
const UserUseCase = require("../useCases/UserUseCase.js");

class UserController {
  async criar(req, res) {
    const { name, email, password } = req.body;

    try {
      const createdUser = await new UserUseCase().createUserUseCase(
        name,
        email,
        password,
        res
      );

      if (createdUser) {
        return res.status(200).json({ user: createdUser });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

module.exports = UserController;
