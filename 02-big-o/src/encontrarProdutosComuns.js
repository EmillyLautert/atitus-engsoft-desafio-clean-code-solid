function encontrarProdutosComuns(listaA, listaB) {
  const itensB = new Set(listaB);
  return [...new Set(listaA.filter((item) => itensB.has(item)))];
}

module.exports = encontrarProdutosComuns;
