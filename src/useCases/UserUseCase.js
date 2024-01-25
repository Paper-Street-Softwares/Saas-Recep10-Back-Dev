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

  executeFindUserById = async (id, res) => {
    const findUserById = await this.userRepository.findUserById(id);

    if (!findUserById) {
      res.status(400).json({ error: "User not found." });
      return;
    }

    return findUserById;
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

  executeDeleteUserById = async (id, res) => {
    try {
      const deletedUserById = await this.userRepository.deleteUserById(id);

      return deletedUserById;
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };
}

module.exports = UserUseCase;
