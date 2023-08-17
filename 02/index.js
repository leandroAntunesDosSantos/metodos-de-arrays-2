const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificador = (arrayPalavras) => {
  const resultado = arrayPalavras.some((palavra) => {
    return palavra.length > 5;
  });
  if (resultado) {
    console.log("Vírus detectado");
  } else {
    console.log("nenhum vírus encontrado");
  }
};

verificador(palavras);
