class Student {
    constructor(nombre, edad, cursosAprobados){
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    }
}

const lennin = new Student(
    'Lennin',
    40,
    [
        'Programación en JavaScript',
        'Curso de programación Básica'
    ]
);

lennin.aprobarCurso('Diseño de páginas con WordPress');