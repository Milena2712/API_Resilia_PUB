import { bdBebidas } from "../model/bebidas.js";
import MetodosBebidas from "../DAO/MetodosBebidas.js";
import { verificaDadosBebidas } from "../services/verificaDadosValidos.js";

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
    const bebida = await new Promise((resolve, reject) => {
      resolve([req.body.nome, req.body.tipo, req.body.valor]);

      reject("Não foi possivel pegar as informações da bebida");
    });

    metodos
      .inserirBebida(...bebida)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
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
