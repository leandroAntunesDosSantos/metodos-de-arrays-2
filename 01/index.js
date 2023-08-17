const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

function posicaoLivro(nomeDoLivro, livros) {
  let posiçao = livros.findIndex((nome) => {
    return nome === nomeDoLivro;
  });
  console.log(`O livro está na ${posiçao + 1} posição.`);
}
posicaoLivro(nomeDoLivro, livros);
