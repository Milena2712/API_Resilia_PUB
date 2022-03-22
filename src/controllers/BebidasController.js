import MetodosBebidas from "../DAO/MetodosBebidas.js";
import * as verificaEntradas from "../services/verificaEntradas.js";

const metodos = new MetodosBebidas();

class BebidasController {
  //Método Create --------------------
  criarTabela(req, res) {
    metodos
      .criarTabela()
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Create --------------------
  async inserirBebida(req, res) {
    try {
      const bebida = await new Promise((resolve, reject) => {
        resolve([req.body.nome, req.body.tipo, req.body.valor]);

        reject("Não foi possivel pegar as informações da bebida");
      });

      const nomeEmBranco = verificaEntradas.verificaCampoEmBranco(bebida[0]);
      const tipoEmBranco = verificaEntradas.verificaCampoEmBranco(bebida[1]);
      const valorEmBranco = verificaEntradas.verificaCampoEmBranco(bebida[2]);
      const qntCaracter = verificaEntradas.verificaQntDeCaracter(bebida[1]);

      if (!nomeEmBranco) {
        throw new Error("O campo nome não pode ficar em branco");
      } else if (!tipoEmBranco) {
        throw new Error("O campo tipo não pode ficar em branco");
      } else if (!valorEmBranco) {
        throw new Error("O campo valor não pode ficar em branco");
      } else if (!qntCaracter) {
        throw new Error("O campo tipo não pode ter menos de 3 caracteres");
      } else {
        metodos
          .inserirBebida(...bebida)
          .then((response) => res.send(response))
          .catch((response) => res.send(response));
      }
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
  //Método Read ----------------------
  async buscarBebidas(req, res) {
    metodos
      .buscarBebidas()
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Read --------------------
  bucarBebidaPorId(req, res) {
    const id = req.params.id;
    metodos
      .bucarBebidaPorId(id)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Delete --------------------
  deletarBebida(req, res) {
    const id = req.params.id;
    metodos
      .deletarBebida(id)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Update --------------------
  async atualizarBebida(req, res) {
    const novaBebida = await new Promise((resolve, reject) => {
      resolve([
        req.params.id,
        req.body.nome,
        req.body.tipo,
        parseFloat(req.body.valor),
      ]);
    });
    metodos
      .atualizarBebida(...novaBebida)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }
}

export default BebidasController;
