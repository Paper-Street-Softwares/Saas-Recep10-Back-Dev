const UserRepository = require("../repositories/User-repository");

class UserUseCase {
  userRepository = new UserRepository();

  constructor() {
    this.userRepository.acaoRepository1();
  }

  acaoUseCase1() {}
  acaoUseCase2() {}
}

module.exports = UserUseCase;
