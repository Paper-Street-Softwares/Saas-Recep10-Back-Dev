const UserRepository = require("../repositories/UserRepository");

class UserUseCase {
  userRepository = new UserRepository();

  executeCreateUser = async (name, email, password, res) => {
    if (!name) {
      name = "Não informado";
    }

    if (!email) {
      res.status(400).json({ message: "Email must be provided." });
      return;
    }

    const findUserByEmail = await this.userRepository.findUserByEmail(email);

    if (findUserByEmail) {
      res.status(400).json({ message: "Email is already in use." });
      return;
    }

    const createNewUser = await this.userRepository.createUser(
      name,
      email,
      password
    );
    return createNewUser;
  };

  executeFindAllUser = async () => {
    const listOfAllUsers = await this.userRepository.findAllUser();

    return listOfAllUsers;
  };

  executeUpdateUser = async (id, name, email, password, res) => {
    try {
      const updatedUser = await this.userRepository.updateUserById(
        id,
        name,
        email,
        password
      );

      return updatedUser;
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: "Internal server error." });
    }
  };
}

module.exports = UserUseCase;
