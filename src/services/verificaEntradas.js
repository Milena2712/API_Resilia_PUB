export function verificaCampoEmBranco(bebida) {
  if (bebida == undefined) {
    return false;
  } else {
    return true;
  }
}

export function verificaQntDeCaracter(tipo) {
  if (tipo.length <= 3) {
    return false;
  } else {
    return true;
  }
}
