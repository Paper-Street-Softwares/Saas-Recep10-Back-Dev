import prisma from "../database/prisma/prismaClient";

async function createUser(name: string, email: string, password: string) {
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return newUser;
}

export { createUser };
