// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(pString) {
  let stringInvertida = '';
  
  for (let i = pString.length - 1; i >= 0; i--) {
      stringInvertida += pString[i];
  };
  
  return stringInvertida;
};

const stringOriginal = 'DIEGO GIELDA exemplo de string';
const resultado = inverterString(stringOriginal);
console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${resultado}`);
