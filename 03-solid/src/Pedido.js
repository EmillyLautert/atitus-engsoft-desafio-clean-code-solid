function validarPedido(pedido) {
  if (!pedido.itens || pedido.itens.length === 0) {
    throw new Error("Pedido sem itens");
  }
}

function calcularTotal(itens) {
  const subtotal = itens.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return subtotal > 1000 ? subtotal * 0.9 : subtotal;
}

module.exports = { validarPedido, calcularTotal };
