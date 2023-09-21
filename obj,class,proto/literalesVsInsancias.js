// Objetos literales
const juan1 = {
    nombre: 'Juan',
    nombreUsuario: 'JuanDC',
    puntos: 100,
    socialMedia: {
        twitter: '@fjuandc',
        instagram: 'fjuandc',
        facebook: null,
    },
    rutasAprendizaje: [
        {
            nombre: 'Desarrollo web',
            cursos: [
            'curso definitivo de HTML y CSS',
            'curso practico de HTML y CSS',
            'curso de responsive design',
            ],
        },
        {
            nombre: 'Escuela de Videojuegos',
            cursos: [
            'curso introducción a la producción de Videojuegos',
            'curso Unreal Engine',
            'curso de Unity 3D',
            ],
        },
    ],
};

const jose1 = {
    nombre: 'José',
    nombreUsuario: 'JoseED',
    puntos: 1924,
    socialMedia: {
        twitter: '@joseED',
        instagram: 'joseED',
        facebook: null,
    },
    rutasAprendizaje: [
        {
            nombre: 'Desarrollo web',
            cursos: [
            'curso definitivo de HTML y CSS',
            'curso practico de HTML y CSS',
            'curso de responsive design',
            ],
        },
        {
            nombre: 'Escuela de Videojuegos',
            cursos: [
            'curso introducción a la producción de Videojuegos',
            'curso Unreal Engine',
            'curso de Unity 3D',
            ],
        },
    ],
};
// al ser objetos literales hay que crear uno por vez aunque se repitan muchos los elementos, por cada uno son 30 lineas aproximadamente, son son 10 alumnos son 300 lineas solo en la creación de alumnos

// otra alternativa son las instancias, donde se construye una especie de plantilla, y se usan 40 para la plantilla, pero 3 para cada alumno y a largo plazo termina siendo más rentable

class Student {
    constructor({
        name,
        email,
        username,
        instagram = undefined,
        twitter = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            instagram,
            twitter,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class LearningPath {
    constructor ({
        name,
        teacher,
        courses = [],
    }){
        this.name = name;
        this.teacher = teacher;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: 'escuela web',
    teacher: 'Diego de Granda',
    courses: [
        'curso de programación básica',
        'curso definitivo de HTML y CSS',
        'curso practico de HTML y CSS',
        'curso de responsive design',
    ]
})
const escuelaData = new LearningPath({
    name: 'escuela data Business',
    teacher: 'Diego de Granda',
    courses: [
        'curso de programación básica',
        'curso DataBusiness',
        'curso Dataviz',
    ]
})

const juan2 = new Student({
    name: 'Juan',
    username: 'JuanDC',
    email: 'juan123@gmail.com',
    instagram: 'fjuandc',
    LearningPath: [escuelaWeb, escuelaData],
})
const jose2 = new Student({
    name: 'Jose',
    username: 'joseED',
    email: 'jose123@gmail.com',
    twitter: 'fjoseED',
    LearningPath: [escuelaData],
})