const VisitanteUseCase = require("../useCases/VisitanteUseCase");

class VisitanteController {
  visitanteUseCase = new VisitanteUseCase();

  async logtestController(a) {
    console.log(a);
  }
}

module.exports = VisitanteController;
