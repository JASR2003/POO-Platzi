let juguete = {
  nombre: "Juan",
  get apellido() {
    return "Pérez";
  }
};

console.log(juguete.nombre); // "Juan"
console.log(juguete.apellido); // "Pérez"

let juguete2 = {
  nombre: "Juan",
  edad: 20,
  set edad(nuevoEdad) {
    if (nuevoEdad >= 18) {
      this.edad = nuevoEdad;
    } else {
      console.log("La edad debe ser mayor o igual a 18");
    }
  }
};

juguete2.edad = 17; // La edad debe ser mayor o igual a 18
juguete2.edad = 21; // 21

// el get y set hacen que las propiedades tengan mayor o menor alcance, es decir si son privadas de un prototipo, o si son publicas, es decir que desde fuera se pueda se pueda llamar

export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = ''; // Inicializa la propiedad privada _name como una cadena vacía
    this.name = name; // Llama al setter de name para validar y actualizar el valor de _name
    this.classes = classes; // Inicializa la propiedad classes con un valor opcional
  }

  get name() {
    return this._name; // Devuelve el valor actual de _name
  }

  set name(newName) {
    if (typeof newName === 'string') { // Comprueba si newName es un string válido
      newName = newName.trim(); // Elimina los espacios en blanco al inicio y al final del string
      if (newName !== '') { // Comprueba si el string resultante no es vacío
        this._name = newName
          .split(' ') // Divide el string en palabras usando un espacio como separador
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Convierte la primera letra de cada palabra en mayúsculas
          .join(' '); // Vuelve a unir las palabras en un string usando un espacio como separador
      }
    }
    // Si newName no es un string válido o es un string vacío, no se modifica el valor de _name
  }
}