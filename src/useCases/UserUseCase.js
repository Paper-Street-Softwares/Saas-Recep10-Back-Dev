const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  async createUserUseCase(name, email, password, res) {
    if (!name) {
      res.status(400).json({ error: "Name not found" });
    } else {
      new UserRepository().createUser(name, email, password);
      res.status(200).json({ status: "User created." });
    }
  }
}

module.exports = UserUseCase;
