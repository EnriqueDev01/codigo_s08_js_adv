const URL = "https://60a6f240b970910017eb29b3.mockapi.io/tasks";

class Task {
    id;
    nombre;
    prioridad;
    urgencia;
    tiempo;
    constructor(_nombre, _prioridad="MINOR", _urgencia="today", _tiempo="1h"){
        this.nombre=_nombre;
        this.prioridad=_prioridad;
        this.urgencia=_urgencia;
        this.tiempo=_tiempo;
    }
}

class ToDoList {
    tasks=[];
    constructor(){
        this.obtenerTareas();
    }        
    obtenerTareas(){
        fetch(URL)
        .then((respuesta) => {
            // console.log("respuesta:",respuesta);
            return respuesta.json();
        })
        .then((datos) => {
            // console.log("datos:",datos);
            this.tasks=datos;
            imprimirTareas(this.tasks,tabla_tareas);
            nombre_tarea.value = "";
        })        
    }
    agregarTareas(nuevaTask){
        let cabecera = {            
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(nuevaTask)
        }        
        fetch(URL, cabecera)
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((taskCreada) => {
            console.log(taskCreada);
            this.obtenerTareas();
        })              
    }
}

let boton_aniadir_tareas = document.getElementById("btnAddTask");
let nombre_tarea = document.getElementById("txtInputTask");
let tabla_tareas = document.getElementById("tasks");

let imprimirTareas = function (tasks, table_body_tareas) {
    let htmlTasks = "";
    tasks.forEach(function (task) {
        htmlTasks = htmlTasks +
            `<tr>
                <td><input class="form-check-input" type="radio"></td>
                <td>${task.nombre}</td>
                <td>${task.prioridad}</td>
                <td>${task.urgencia}</td>
                <td>${task.tiempo}</td>
            </tr>`
    });
    table_body_tareas.innerHTML = htmlTasks;
};

boton_aniadir_tareas.addEventListener("click",function(e) {
    e.preventDefault();    
    if (nombre_tarea.value.trim() !== "") {
        let nueva_tarea = new Task(nombre_tarea.value);
        lista_tareas.agregarTareas(nueva_tarea);        
    }
});

let lista_tareas = new ToDoList();
