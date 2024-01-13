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

  findUserById = async (id) => {
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
  };

  findUserByEmail = async (email) => {
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
  };

  findAllUser = async () => {
    const usersList = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return usersList;
  };

  updateUserById = async (id, name, email, password, res) => {
    const updatedUser = await prisma.user.update({
      data: {
        name,
        email,
        password,
      },
      where: {
        id,
      },
    });

    return updatedUser;
  };

  deleteUserById = async (id) => {
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
  };

  deleteUserByName = async (name) => {
    const locateByName = await prisma.user.findFirst({
      where: {
        name,
      },
    });

    const deletedUserByName = await prisma.user.delete({
      where: {
        id: locateByName.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return deletedUserByName;
  };

  deleteManyByName = async (name) => {
    const manyDeletedByName = await prisma.user.deleteMany({
      where: {
        name,
      },
    });
  };
}

module.exports = UserRepository;
