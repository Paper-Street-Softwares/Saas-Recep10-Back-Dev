const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  userRepository = new UserRepository();
}

module.exports = UserUseCase;
