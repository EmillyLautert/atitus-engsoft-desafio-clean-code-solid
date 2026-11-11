const regrasDesconto = [
  {
    tipo: 'premium',
    quando: (cliente, valor) => valor > 1000 && cliente.anosCadastro > 5,
    percentual: 0.20,
  },
  {
    tipo: 'premium',
    quando: (_, valor) => valor > 1000,
    percentual: 0.15,
  },
  {
    tipo: 'premium',
    quando: (_, valor) => valor > 500,
    percentual: 0.10,
  },
  {
    tipo: 'premium',
    quando: () => true,
    percentual: 0.05,
  },
  {
    tipo: 'gold',
    quando: (_, valor) => valor > 1000,
    percentual: 0.10,
  },
  {
    tipo: 'gold',
    quando: () => true,
    percentual: 0.02,
  },
];

function calcularDesconto(cliente, valor) {
  const regra = regrasDesconto.find(
    (regra) => regra.tipo === cliente.tipo && regra.quando(cliente, valor)
  );

  return regra ? valor * regra.percentual : 0;
}

module.exports = calcularDesconto;
