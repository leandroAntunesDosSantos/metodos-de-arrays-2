const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const selecionandoNome = nomes.filter((nome) => {
  return nome[0] === "a" || nome[0] === "A";
});
console.log(selecionandoNome);
