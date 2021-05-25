class Task {
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
    taskAdd(task){
        this.tasks.push(task);
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
        lista_tareas.taskAdd(nueva_tarea);
        imprimirTareas(lista_tareas.tasks,tabla_tareas);
        nombre_tarea.value = "";
    }
});

let lista_tareas = new ToDoList();
