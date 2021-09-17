
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

showMenu();

function showMenu() {
  rl.question(
    `Hola, bienvenido al ToDo List, Ingrese:
  1. Para crear una nueva tarea
  2. Para visualizar las tareas creadas
  3. Para modificar una tarea
  4. Para eliminar una tarea
  5. Para salir del ToDo List \n`,
    (inputMenu) => {
      switch (inputMenu) {
        case "1":
          showMenuCreateTask();
          break;
        case "2":
          viewTask();
          break;
        case "3":
          updateTask();
          break;
        case "4":
          delateTask();
          break;
        case "5":
          exitMenu();
          break;
        default:
          console.log("No es una opción valida");
          break;
      }
      //rl.close();
    });
}

let taskList = [];

class Tasks {
  constructor (title, description, state){
    this.title = title;
    this.description = description;
    this.state = state;
  }
}

function showMenuCreateTask() {
  rl.question(`Ingrese el título de la tarea \n`,(title) => {
    rl.question(`Ingrese una descripción de la tarea \n`,(description) => {
      rl.question(`Ingrese el estado de la tarea \n`,(state) => {
        const tarea = new Tasks (title, description, state)
        taskList.push(tarea);
        console.log(taskList);
        showMenu();
      });
    });
  });
}
function viewTask() {
  taskList.forEach(element => console.log(element));
  if(taskList.length == 0){
    console.log(`Aún no hay tareas creadas \n`);
  }
  showMenu();
}
function updateTask() {
  console.log("Actualizando tarea");
}
function delateTask() {
  console.log("Eliminando tarea");
}
function exitMenu() {
  process.exit();
}