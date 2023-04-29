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