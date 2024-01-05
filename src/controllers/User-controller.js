const UserUseCase = require("../useCases/User-useCase");

class UserController {
  userUseCase = new UserUseCase();

  constructor() {}

  async acaoController1(req, res) {
    return res.status(200).json({ test: "test" });
  }
  async acaoController2() {}
}

module.exports = UserController;
