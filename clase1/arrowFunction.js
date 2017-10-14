//Lista de alumnos
var listaAlumnos = [
  {
    codigo: 1,
    notaFinal: 20,
  },
  {
    codigo: 2,
    notaFinal: 12,
  },
  {
    codigo: 3,
    notaFinal: 15,
  }
];

//Generar un objeto
var test = listaAlumnos.reduce((sum, number) =>{
 //console.log(number.codigo);
 //console.log('notaFinal: ' + number.notaFinal);
  if( number.notaFinal >= 15){
    sum[number.codigo] = number.notaFinal;
  }
  return sum;

},{}
);

console.log(test);
