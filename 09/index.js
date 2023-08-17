const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const somentePositivo = numeros.filter((numero) => {
  return numero > 0;
});
console.log(somentePositivo);
