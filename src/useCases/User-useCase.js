const UserRepository = require("../repositories/User-repository");
const User = require("../entities/User-entity");

class UserUseCase {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    const createdUser = await this.userRepository.createUser(userData);
    return createdUser;
  }
}

module.exports = UserUseCase;
