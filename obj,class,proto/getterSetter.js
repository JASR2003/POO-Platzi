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