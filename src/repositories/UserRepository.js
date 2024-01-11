const prisma = require("../database/prisma/prismaClient");

class UserRepository {
  createUser = async (name, email, password) => {
    const userCreated = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return userCreated;
  };

  async findUserById(id) {
    const userFoundById = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return userFoundById;
  }

  async findUserByEmail(email) {
    const userFoundByEmail = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return userFoundByEmail;
  }

  async findAllUser() {
    const usersList = await prisma.user.findMany({
      select: {
        name: true,
        email: true,
      },
    });

    return usersList;
  }

  async deleteUserById(id) {
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return deletedUser;
  }

  async deleteUserByName(name) {
    const deletedUser = await prisma.user.deleteMany({
      where: {
        name,
      },
    });

    return deletedUser;
  }
}

module.exports = UserRepository;
