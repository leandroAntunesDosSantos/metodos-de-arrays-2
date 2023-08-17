const numeros = [0, 122, 4, 6, 7, 8, 44];

function verificarSeEPar(numeros) {
  const verificador = numeros.every((numero) => {
    return numero % 2 === 0;
  });
  if (verificador) {
    console.log("array válido");
  } else {
    console.log("array inválido");
  }
}
verificarSeEPar(numeros);
