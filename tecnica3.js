// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const fs = require('fs');
const dadosJson = fs.readFileSync('dados.json', 'utf8');
const dados = JSON.parse(dadosJson);

function calcularFaturamento(pFaturamento) {
  const valoresFiltrados = pFaturamento
    .map(dia => dia.valor)
    .filter(valor => valor > 0);

  const menor = Math.min(...valoresFiltrados);
  const maior = Math.max(...valoresFiltrados);
  const soma = valoresFiltrados.reduce((acc, valor) => acc + valor, 0);
  const mediaMensal = soma / valoresFiltrados.length;
  const dias = valoresFiltrados.filter(valor => valor > mediaMensal).length;

  return {
    menor,
    maior,
    dias
  };
};

const resultado = calcularFaturamento(dados);
console.log(`Menor valor: ${resultado.menor}`);
console.log(`Maior valor: ${resultado.maior}`);
console.log(`Número de dias acima da média: ${resultado.dias}`);
