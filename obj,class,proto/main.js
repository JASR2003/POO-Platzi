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

sthephany.aprobarCurso("curso de Figma");

console.log(sthephany.cursosAprobados)