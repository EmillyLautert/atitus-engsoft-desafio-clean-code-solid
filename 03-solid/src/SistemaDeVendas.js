const { validarPedido, calcularTotal } = require("./Pedido");

class SistemaDeVendas {
  constructor({ repositorio, notificador }) {
    this.repositorio = repositorio;
    this.notificador = notificador;
  }

  async processarVenda(pedido) {
    validarPedido(pedido);
    const venda = {
      ...pedido,
      total: calcularTotal(pedido.itens),
      status: "pago",
    };

    await this.repositorio.salvar(venda);
    await this.notificador.enviarEmail(venda.clienteEmail);
    return venda;
  }
}

module.exports = SistemaDeVendas;
