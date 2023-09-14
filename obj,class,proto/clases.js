class Student {
    constructor({
        nombre,
        edad,
        cursosAprobados = [],
    }){
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    }
}

const lennin = new Student({
    nombre: 'Lennin',
    edad: 40,
    cursosAprobados: [
        'Programación en JavaScript',
        'Curso de programación Básica'
    ]
});

lennin.aprobarCurso('Diseño de páginas con WordPress');