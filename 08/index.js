const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let novoArrayFrutas = frutas.map((fruta) => {
  return fruta.toLocaleLowerCase();
});

const frutasNovo = [];

for (let i = 0; i < novoArrayFrutas.length; i++) {
  frutasNovo.push(
    `${i} - ${novoArrayFrutas[i][0].toUpperCase()}${novoArrayFrutas[i].slice(
      1
    )}`
  );
}
console.log(frutasNovo);
