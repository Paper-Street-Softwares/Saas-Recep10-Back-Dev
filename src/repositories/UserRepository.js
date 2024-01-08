const prisma = require("../database/prisma/prismaClient");

class UserRepository {
  async createUser(name, email, password) {
    const userCreated = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        name: true,
        email: true,
      },
    });

    return userCreated;
  }

  async findUserByEmail(email) {
    const userFoundByEmail = await prisma.user.findFirst({
      where: {
        email,
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
}

module.exports = UserRepository;
