const listaCompras = ["Arroz", "Atun", "Lentejas", "Polenta", "Yerba"];
listaCompras.push("Aceite de girasol");
listaCompras.pop();

const Peliculas = [
  { nombre: "Harry Potter", Director: "alfonso cuaron", Año: 2001 },
  { nombre: "Trabajo", Director: "La vida", Año: 1000 },
  { nombre: "Dios", Director: "yo", Año: 20000 },
];

const mayoresDosmildiez = Peliculas.filter((obj) => obj.Año > 2010);
console.log(mayoresDosmildiez);

const directores = Peliculas.map((valor) => valor.Director);
console.log(directores);
const titulos = Peliculas.map((valor) => valor.nombre);
console.log(titulos);

const concatenados = directores.concat(titulos);
console.log(concatenados);

const conFactor = [...directores, ...titulos];
console.log(conFactor);
