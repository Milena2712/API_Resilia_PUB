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
            valor FLOAT,
            
            
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
}

export default BebidasController;
