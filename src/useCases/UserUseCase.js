const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  async executeCreateUser(name, email, password, res) {
    if (!name) {
      name = "Não informado";
    }

    if (!email) {
      res.status(400).json({ message: "Email must be provided." });
      return;
    }

    const findUserByEmail = await new UserRepository().findUserByEmail(email);

    if (findUserByEmail) {
      res.status(400).json({ message: "Email is already in use." });
      return;
    }

    const createNewUser = await new UserRepository().createUser(
      name,
      email,
      password
    );
    return createNewUser;
  }
}

module.exports = UserUseCase;
