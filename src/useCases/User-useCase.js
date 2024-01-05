const UserRepository = require("../repositories/User-repository");

class UserUseCase {
  userRepository = new UserRepository();

  constructor() {
    this.userRepository.createUse();
  }

  testMethodUseCase() {}
}

module.exports = UserUseCase;
