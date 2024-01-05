const UserUseCase = require("../useCases/User-useCase");

class UserController {
  userUseCase = new UserUseCase();

  constructor() {
    this.userUseCase.userRepository.createUse;
  }
}

module.exports = UserController;
