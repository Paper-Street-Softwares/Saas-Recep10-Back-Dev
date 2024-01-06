const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  async createUserUseCase(name, email, password) {
    new UserRepository(name, email, password);
  }
}

module.exports = UserUseCase;
