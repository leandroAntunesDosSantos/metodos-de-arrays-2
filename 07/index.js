const enderecos = [
  { cep: "00111222", rua: "Rua dos Artistas" },
  { cep: "00111333", rua: "Rua Augusta" },
  { cep: "00222444", rua: "Avenida Paralela" },
  { cep: "11222333", rua: "Rua Carlos Gomes" },
];
const cepTest = "00222444";

function verificarEndereco(enderecos, cepTest) {
  const verificador = enderecos.find((endereco) => {
    return endereco.cep === cepTest;
  });
  console.log(`${verificador.rua}`);
}

verificarEndereco(enderecos, cepTest);
