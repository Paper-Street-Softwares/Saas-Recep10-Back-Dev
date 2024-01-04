import UserUseCase from "../useCases/user-useCase";

class UserController {
  private userUseCase: UserUseCase;

  constructor() {
    this.userUseCase = new UserUseCase();
  }

  findAllMethod = async (req: any, res: any) => {
    await this.userUseCase.findAll(req, res);
  };

  createMethod = async (req: any, res: any) => {
    await this.userUseCase.create(req, res);
  };
}

export default UserController;
