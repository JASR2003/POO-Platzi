const sthephany = {
    nombre: 'Sthephany',
    apellido: 'Fernandez',
    edad: 19,
    cursosAprobados: [
        'Audiocurso glosario de términos de diseño',
        'Curso de uso y manejo del color',
        'Curso básico de Photoshop',
    ],
    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    },
};

// sthephany aprueba otro curso

function student(nombre, apellido, edad, cursosAprobados) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(cursoAprobado) {
    //     this.cursosAprobados.push(cursoAprobado);
    // }
}

student.prototype.aprobarCurso = function(cursoAprobado){
    this.cursosAprobados.push(cursoAprobado);
}

const jorge = new student('Jorge', 'Suarez', 20, ['HTML5 Y CSS3', 'BOOTSTRAP 4', 'GIT Y GITHUB']);
jorge.aprobarCurso('RESPONSIVE DESIGN');