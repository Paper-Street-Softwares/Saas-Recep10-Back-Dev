const VisitanteRepository = require("../repositories/VisitanteRepository");

class VisitanteUseCase {
  visitanteRepository = new VisitanteRepository();

  async logtestUseCase(a) {
    console.log(a);
  }
}

module.exports = VisitanteUseCase;
