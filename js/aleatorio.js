cont nomes = ["João", "Emerson", "Luke", "Pipokinha", "Cleiton", "Ana"];

funcion aleatorio(lista){
  const posição = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

const nome = aleatorio(nomes)
