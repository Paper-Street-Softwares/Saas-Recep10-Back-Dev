const prisma = require("../database/prisma/prismaClient");
const User = require("../entities/User-entity");

class UserRepository {
  async createUser(userData) {
    const createdUser = await prisma.user.create({
      data: userData,
    });

    return new User(createdUser);
  }
}

module.exports = UserRepository;
