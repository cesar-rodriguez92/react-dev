//Lista de alumnos
/*
var listaGeneral = [
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
var test =
listaGeneral.reduce(function(sum, number){
  console.log(number);
  console.log(number['notaFinal']);
  if(number['notaFinal'] >= 15){
    console.log('entro a if');
    console.log('test:' + test);
    return sum[number.codigo] = number['notaFinal'];
   }
},{});

console.log('final: '+test);
*/
//////////////////////////////////////////
//con Arroy function
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

//console.log('final: '+test);
