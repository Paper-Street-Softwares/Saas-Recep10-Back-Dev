const UserUseCase = require("../useCases/UserUseCase.js");
const UserRepository = require("../repositories/UserRepository.js");

class UserController {
  userRepository = new UserRepository();
  userUseCase = new UserUseCase();

  handleCreateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const createdUser = await this.userUseCase.executeCreateUser(
        name,
        email,
        password,
        res
      );

      if (createdUser) {
        return res.status(201).json({ user: createdUser });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  };

  handleFindUserById = async (req, res) => {
    const { id } = req.params;

    try {
      const findById = await this.userUseCase.executeFindUserById(id);
      return res.status(200).json(findById);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };

  handlefindAllUsers = async (req, res) => {
    try {
      const listAll = await this.userUseCase.executeFindAllUser();
      return res.status(200).json(listAll);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  };

  handleUpdateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.params;
    try {
      const updatedUser = await this.userUseCase.executeUpdateUser(
        id,
        name,
        email,
        password,
        res
      );

      return res.status(201).json(updatedUser);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  };

  handleDeleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedUserById = await this.userUseCase.executeDeleteUserById(id);

      return res.status(200).json(deletedUserById);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };
}

module.exports = UserController;
