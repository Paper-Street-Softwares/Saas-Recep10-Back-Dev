const prisma = require("../database/prisma/prismaClient");

class UserRepository {
  async createUser(name, email, password) {
    const createdUser = await prisma.user.create({
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

    return createdUser;
  }

  async findUserByEmail(email) {
    const userFoundByEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return userFoundByEmail;
  }
}

module.exports = UserRepository;
