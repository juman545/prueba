let cardio = ["corazón de AMOR", "sistole", "diastole"]
let comer = ["100kg diarios", "50kg diarios", "25kg diarios"]
console.log("CAMBIOS:", cardio +" "+ 2 )
console.log(cardio, comer)

function forEachprueba(value, index) {
    console.log(cardio)
    console.log(comer)
    console.log(cardio + comer)

cardio.forEach(forEachprueba)
}
console.log("cardio")
//get fullyear
const getMethodsDate = new Date()
console.log("año completo:", getMethodsDate.getFullYear())
console.log("mes completo:", getMethodsDate.getMonth())//se empieza desde 0 = enero
console.log("día completo:", getMethodsDate.getDay())
console.log("día exacto del mes:", getMethodsDate.getDate())
console.log("hora exacta:", getMethodsDate.getHours())
console.log("minuto exacta:", getMethodsDate.getMinutes())
console.log("segundo exacto:", getMethodsDate.getSeconds())
//fecha normal
const datetoday = new Date()
console.log("fecha normal:", datetoday)
console.log("Día UTC:", datetoday.getUTCDate())
console.log("Año UTC:", datetoday.getUTCFullYear())
console.log("Mes UTC:", datetoday.getTimezoneOffset())
const datetodayepoch = Date.now()
//console.log("fecha normal:", datetodayepoch.getFullYear())
const currentDate = new Date()
const startdate = new Date(currentDate.getFullYear(), 0, 1)

//día exacto del año
let days = Math.floor((currentDate - startdate)/(86400*1000))
console.log("fecha exacta:", days )

//
let weknumber = Math.ceil(days/7)
console.log("Weeknumber", weknumber)
const months = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"]
console.log("Month of:", months[getMethodsDate.getMonth()])

//Datesets
//setfullyear() cambia el año de la fecha actual
console.log(datetoday)
console.log("Modifica la fecha: ", datetoday.setFullYear(2020))
console.log(datetoday)


//comparar dates
const date1 = new Date()
const date2 = new Date()
date2.setFullYear(2022, 5, 24)
if (date2 > date1){
    console.log("hoy es 20 de abril de 2024")
} else{
    console.log("hoy es después de 24 de abril de 2024")
}

//Funciones
function miFuncion(a, b, c) {
    return a, b, c
}
miFuncion()

function miFuncion2() {
    console.log("esto es genial")
}
miFuncion2()//así se llama a la función para que esta imprima el resultado

let sumatotal = miFuncion(1, 2, 3)
console.log("este es el resultado de mi primera función: ", sumatotal)


let condicion = (10<9) ? "10 es mayor que 9" : "10 no es mayor que 9"
console.log(condicion)

const moto = {vel: "más de 10km/h", tamaño: "bigmen", duración: 1200}
console.log(moto.vida)
console.log(moto?.vida)

//expresiones dondicionales

//sentencia if
let x = 11
let z =120
if (10>x){
    console.log("esto es real")
}
//sentencia if else
if (10>x){
    console.log("esto es real")
}else if (z<8) {
    console.log("no era cierto")
}else{
    console.log("solo else")
}

//swicht case es una especie de ocndicional if else if else
switch (z){
    case 8<4:
        resultado = 120
        break
    case 9:
        resultado = 9
        break
    default:
        resultado = "diferente"
        break
}
if (resultado != "diferente"){
    console.log("el resultado es diferente a:", resultado)
}else{
    console.log(" el resultado es igual a: ", z)
}
//
console.log(z)
//claro que miento pero qien no lo hace??????
const texto = "javascript no es mejor que python y es el tio ebrio de la programación";
const arrayTexto = texto.split(" ");
console.log(arrayTexto);

//intento 1 for
let texto1 = "javascript no es mejor que python y es el tio ebrio de la programación";
let arrayTexto1 = [];

for(let i=0; i<texto.length; i++){
  arrayTexto.push(texto[i]);
}

console.log(arrayTexto);

//intento 2 for
let texto2 = "javascript no es mejor que python y es el tio ebrio de la programación";
let arrayTexto2 = [];

let palabra = "";
for (let i = 0; i < texto.length; i++) {
  let caracter = texto.charAt(i);
  if (caracter === " ") {
    arrayTexto.push(palabra);
    palabra = "";
  } else {
    palabra += caracter;
  }
}
// Agregamos la última palabra
arrayTexto.push(palabra);

console.log(arrayTexto);

//intento 3
// Definimos la clase del objeto "persona"
class Persona {
    constructor(nombre, edad, nota) {
      this.nombre = nombre;
      this.edad = edad;
      this.nota = nota;
    }
  
    // Función para actualizar la nota
    actualizarNota(nuevaNota) {
      this.nota = nuevaNota;
    }
  }
  
  // Creamos una lista vacía para guardar las personas
  let listaPersonas = [];
  
  // Agregamos algunas personas a la lista
  listaPersonas.push(new Persona("Juan", 25, "Buena nota"));
  listaPersonas.push(new Persona("María", 30, "Nota promedio"));
  listaPersonas.push(new Persona("Pedro", 20, "Mala nota"));
  
  // Función para mostrar la lista de personas
  function mostrarLista() {
    console.log("Lista de personas:");
    listaPersonas.forEach((persona) => {
      console.log(`- ${persona.nombre} (${persona.edad} años) - Nota: ${persona.nota}`);
    });
  }
  
  // Función para actualizar la nota de una persona
  function actualizarNota(nombrePersona, nuevaNota) {
    // Buscamos la persona por su nombre en la lista
    let persona = listaPersonas.find((p) => p.nombre === nombrePersona);
  
    // Si encontramos la persona, actualizamos su nota
    if (persona) {
      persona.actualizarNota(nuevaNota);
      console.log(`Nota actualizada para ${persona.nombre}`);
    } else {
      console.log(`No se encontró a ${nombrePersona} en la lista`);
    }
  }
  
  // Mostramos la lista inicial
  mostrarLista();
  
  // Actualizamos la nota de Pedro
  actualizarNota("Pedro", "Nota regular");
  
  // Mostramos la lista actualizada
  mostrarLista();