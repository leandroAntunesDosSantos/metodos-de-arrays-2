const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function proibicaoDeCompra(palavras) {
  const verificador = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
  });
  if (verificador) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
  } else {
    console.log("tudo certo, vamos as compras!");
  }
}
proibicaoDeCompra(palavras);
