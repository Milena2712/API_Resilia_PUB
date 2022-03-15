export function verificaDadosBebidas(dados) {
  if (
    dados.nome == undefined ||
    dados.tipo == undefined ||
    dados.valor == undefined
  ) {
    return false;
  } else if (
    typeof dados.nome != "string" ||
    typeof dados.tipo != "string" ||
    typeof dados.valor != "number"
  ) {
    return false;
  } else {
    return true;
  }
}
