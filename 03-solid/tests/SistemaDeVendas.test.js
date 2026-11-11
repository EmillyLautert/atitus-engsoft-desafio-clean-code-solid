const SistemaDeVendas = require("../src/SistemaDeVendas");

describe("Desafio 3: SOLID", () => {
  test("Processa venda, salva e notifica o cliente", async () => {
    const repositorio = { salvar: jest.fn() };
    const notificador = { enviarEmail: jest.fn() };
    const sistema = new SistemaDeVendas({ repositorio, notificador });
    const pedido = {
      id: 1,
      clienteEmail: "a@a.com",
      itens: [{ preco: 1200, quantidade: 1 }],
    };

    const venda = await sistema.processarVenda(pedido);

    expect(venda.total).toBe(1080);
    expect(venda.status).toBe("pago");
    expect(repositorio.salvar).toHaveBeenCalledWith(venda);
    expect(notificador.enviarEmail).toHaveBeenCalledWith(pedido.clienteEmail);
  });

  test("Rejeita pedido sem itens", async () => {
    const sistema = new SistemaDeVendas({
      repositorio: { salvar: jest.fn() },
      notificador: { enviarEmail: jest.fn() },
    });

    await expect(sistema.processarVenda({ itens: [] })).rejects.toThrow("Pedido sem itens");
  });
});
