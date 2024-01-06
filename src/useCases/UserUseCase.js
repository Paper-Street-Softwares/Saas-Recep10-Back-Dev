const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  async createUserUseCase(name, email, password, res) {
    if (!name) {
      res.status(400).json({ message: "name nao encontrado" });
      return;
    }

    const newUser = await new UserRepository().createUser(
      name,
      email,
      password
    );
    return newUser;
  }
}

module.exports = UserUseCase;
