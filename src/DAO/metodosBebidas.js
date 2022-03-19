import { bdBebidas } from "../model/bebidas.js";

class MetodosBebidas {
  //Método Create Table --------------------
  criarTabela() {
    try {
      return new Promise((resolve, reject) => {
        const scriptCreateTable = `
               CREATE TABLE IF NOT EXISTS bebidas (
                  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                  nome VARCHAR(50),
                  tipo VARCHAR(50),
                  valor FLOAT
               )
            `;

        bdBebidas.run(scriptCreateTable, (e) => {
          if (!e) {
            resolve("Tabela criada com sucesso");
          } else {
            reject("Erro ao criar tabela");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Create Bebida --------------------
  inserirBebida(nome, tipo, valor) {
    try {
      return new Promise((resolve, reject) => {
        const scriptInsertBebida = `
               INSERT INTO Bebidas (nome, tipo, valor) VALUES 
               ('${nome}', '${tipo}', ${valor})
            `;
        bdBebidas.run(scriptInsertBebida, (e) => {
          if (!e) {
            resolve(
              `Dados da bebida 
                  nome: ${nome} 
                  tipo: ${tipo}
                  inseridos com sucesso`
            );
          } else {
            reject("Erro ao salvar dados da Bebida");
          }
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  //Método Read ----------------------
  async buscarBebidas() {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectBebidas = `SELECT * FROM Bebidas`;
        bdBebidas.all(scriptSelectBebidas, (e, rows) => {
          if (!e) {
            resolve(rows);
          } else {
            reject("Problema ao obter dados");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Read ID --------------------
  bucarBebidaPorId(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectBebidaId = `SELECT * FROM bebidas WHERE id = ${id}`;
        bdBebidas.get(scriptSelectBebidaId, (e, row) => {
          if (!e) {
            if (row != undefined) {
              resolve(row);
            } else {
              reject("Nenhum registro encontrado");
            }
          } else {
            reject("Não foi possivel acessar o banco de dados");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Delete --------------------
  deletarBebida(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptDelete = `DELETE FROM bebidas WHERE id = ${id}`;
        bdBebidas.run(scriptDelete, (e) => {
          if (!e) {
            resolve("Registro da bebida deletada com sucesso");
          } else {
            reject("Não foi possivel deletar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Update --------------------
  async atualizarBebida(id, novoNome, novoTipo, novoValor) {
    try {
      return new Promise((resolve, reject) => {
        const scriptUpdate = `UPDATE bebidas SET nome='${novoNome}', tipo='${novoTipo}', valor='${novoValor}' WHERE id = ${id}`;
        bdBebidas.run(scriptUpdate, (e) => {
          if (!e) {
            resolve("Registro da bebida atualizado com sucesso");
          } else {
            reject("Não foi possivel atualizar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }
}
export default MetodosBebidas;
