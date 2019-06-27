//defino el modelo de estudiante
//hacerlo como objeto es una manera intuitiva de representar algo del mundo real
//aquí lo vamos a hacer con instanciamiento de datos. Esta función representa el modelo de todas las estudiantes
//al pasarle los datos, debe crear una nueva estudiante con todas las características
//espera unos parámetros y se los asigna a sí mismo como propiedades
class student {
    constructor(first_name, last_name, birth_date) {
        this.first_name = first_name; //tu first_name es que se recibe por parámetro.
        this.last_name = last_name; //this es un elemento referencial, llama a la función en la que estoy.
        this.birth_date = new Date (birth_date);
        this.greet = () => console.log(`Hola, soy ${this.first_name}`); // métodos que hagan cosas con valores propios, no cosas externas
        this.birthday_greeting = () => {
            const nextBirthday = Math.abs(new Date().getMonth() - this.birth_date.getMonth());
            console.log(`Mi próximo cumpleaños es en ${nextBirthday} meses`);
        };
    }
}

//defino cómo voy a agrupar a las estudiantes
//normalmente, si tengo un modelo repetido muchas veces => es una lista (array)
const allStudents = []

//fórmula para capturar los datos de una nueva estudiante
let createStudent = () =>{
    //capturo la información
    const nameField=document.getElementById('first_name') //crea un nodo con un elemento que ya existe en el DOM
    const lastNameField=document.getElementById('last_name')
    const birthDateField=document.getElementById('birth_date')
    //armo un objeto según mi modelo con esta información
    const newStudent = new student (nameField.value,lastNameField.value,birthDateField.value)
    //y guardo el objeto en la lista
    allStudents.push(newStudent) 
    console.log(allStudents)
}


