import prisma from "../database/prisma/prismaClient";
import { createUser } from "../repositories/user-repository";

class UserUseCase {
  async findAll(req: any, res: any) {
    return res.status(200).json({ useCase: "Ok" });
  }

  async create(req: any, res: any) {
    const { name, email, password } = req.body;

    const newUser = await createUser(name, email, password);

    return res.status(201).json({ status: newUser });
  }
}

export default UserUseCase;
