const express = require("express");
const UserUseCase = require("../useCases/UserUseCase");

class UserController {
  userUseCase = new UserUseCase();

  constructor() {}

  criar(nome, email, password) {
    this.userUseCase.userRepository.createUser(nome, email, password);
  }
}

const teste = new UserController();

teste.criar("ab", "ju", "ja");

module.exports = UserController;
