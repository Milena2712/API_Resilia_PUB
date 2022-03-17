import { bdBebidas } from "../model/bebidas.js";
import { verificaDadosBebidas } from "../services/verificaDadosValidos.js";

class BebidasController {
  //Método Create --------------------
  criarTabela(req, res) {
    const tabela_bebidas = `
         CREATE TABLE IF NOT EXISTS bebidas (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome VARCHAR(50),
            tipo VARCHAR(50),
            valor FLOAT           
         )
      `;

    return new Promise((resolve, reject) => {
      return resolve(
        bdBebidas.run(tabela_bebidas, (e) => {
          try {
            if (!e) {
              res.status(201);
              res.send("Tabela criada com sucesso");
            }
          } catch {
            res.status(401);
            res.send("Erro ao criar tabela ", e.message);
          }
        })
      );
    });
  }

  //Método Create --------------------
  async salvarBebidas(req, res) {
    try {
      const bebida = await new Promise((resolve, reject) => {
        const result = {
          nome: req.body.nome,
          tipo: req.body.tipo,
          valor: parseFloat(req.body.valor),
        };

        // const verificacaoDosDados = verificaDadosBebidas(result);

        // if (verificacaoDosDados === true) {
        resolve(result);
        //   } else reject();
      });

      const infoBebidas = `
         INSERT INTO bebidas (nome, tipo, valor) VALUES 
            ('${bebida.nome}', '${bebida.tipo}', ${bebida.valor})
         `;

      bdBebidas.run(infoBebidas, (e) => {
        if (!e) {
          res.status(201);
          res.send(
            `Dados da bebida 
               nome: ${bebida.nome} 
               tipo: ${bebida.tipo}
               inseridos com sucesso`
          );
        }
      });
    } catch (error) {
      res.status(500);
      res.send("Erro ao salvar dados da bebida");
    }
  }

  //Método Read ----------------------
  async buscarTodasBebidas(req, res) {
    const scriptSelect = `SELECT * FROM bebidas`;
    try {
      const results = await new Promise((resolve, reject) => {
        return bdBebidas.all(scriptSelect, (e, rows) => {
          if (!e) {
            resolve(rows);
          } else {
            reject("Problema ao obter dados");
          }
        });
      });

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //MÉTODO DELETAR
  deletarBebida(req, res) {
    try {
      const id = parseInt(req.params.id);
      const scriptDelete = `DELETE FROM bebidas WHERE id = ${id}`;
      bdBebidas.run(scriptDelete, (e) => {
        if (!e) {
          res.status(200).send("Registro deletado com sucesso");
        } else {
          res.status(404).send("Não foi possivel deletar o registro");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Método Buscar por id

  buscarPorID(req, res) {
    try {
      const paramId = req.params.id;
      const scriptSelectId = `SELECT * FROM bebidas WHERE id = ${paramId} `;

      bdBebidas.get(scriptSelectId, (e, row) => {
        if (!e) {
          if (row != undefined) {
            res.status(200).json(row);
          } else {
            res.status(404).send("Nenhum registro encontrado");
          }
        } else {
          res.status(404).send("Não foi possivel acessar o banco de dados");
        }
      });
    } catch (error) {
      console(error);
    }
  }
  //Método Update
  async atualizarBebida(req, res) {
    try {
      const novaBebida = await new Promise((resolve, reject) => {
        const result = {
          nome: req.body.nome,
          tipo: req.body.tipo,
          valor: parseFloat(req.body.valor),
        };
        return resolve(result);
      });

      const id = req.params.id;

      const scriptAtualiza = `UPDATE bebidas SET nome='${novaBebida.nome}', tipo='${novaBebida.tipo}', valor=${novaBebida.valor} WHERE id = ${id}`;

      bdBebidas.run(scriptAtualiza, (e) => {
        if (!e) {
          res.status(200).send("Registro atualizado com sucesso");
        } else {
          res.status(404).send("Não foi possivel atualizar o registro");
          console.error(e);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default BebidasController;
