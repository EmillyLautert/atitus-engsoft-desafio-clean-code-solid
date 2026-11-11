class PedidoRepository {
  async salvar(pedido) {
    console.log(`Salvando pedido ${pedido.id}...`);
  }
}

module.exports = PedidoRepository;
