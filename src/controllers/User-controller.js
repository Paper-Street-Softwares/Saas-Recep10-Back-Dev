const express = require("express");
const UserUseCase = require("../useCases/User-useCase");
const User = require("../entities/User-entity");

class UserController {
  constructor() {
    this.userUseCase = new UserUseCase();
  }

  async createdUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await this.userUseCase.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
