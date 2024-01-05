const prisma = require("../database/prisma/prismaClient");

class UserRepository {
  async createUser(name, email, password) {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return createdUser;
  }
}

module.exports = UserRepository;
