// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const dadosPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentuais(pFaturamento) {
  const total = Object.values(pFaturamento).reduce((acumular, valor) => acumular + valor, 0);

  const percentuais = Object.entries(pFaturamento).map(([estado, valor]) => {
    const percentual = (valor / total) * 100;
    return {
      estado,
      valor,
      percentual: percentual.toFixed(2)
    };
  });

  return { total, percentuais };
};

const resultado = calcularPercentuais(dadosPorEstado);

console.log(`Total de faturamento: R$${resultado.total.toFixed(2)}`);
resultado.percentuais.forEach(({ estado, valor, percentual }) => {
  console.log(`${estado}: R$${valor.toFixed(2)} (${percentual}%)`);
});
