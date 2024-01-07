const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  async createUserUseCase(name, email, password, res) {
    if (!name) {
      res.status(400).json({ message: "Name not found." });
      return;
    }

    const findUserByEmail = await new UserRepository().findUserByEmail(email);

    if (findUserByEmail) {
      res.status(400).json({ message: "Email is already in use." });
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
