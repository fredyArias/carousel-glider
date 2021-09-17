const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let taskList = [];

class Tasks {
    constructor (title, description, state){
      this.title = title;
      this.description = description;
      this.state = state;
    }
  }

rl.question(`Ingrese el título de la tarea \n`,(title) => {
    rl.question(`Ingrese una descripción de la tarea \n`,(description) => {
      rl.question(`Ingrese el estado de la tarea \n`,(state) => {
        const Holi = new Tasks(title, description, state)
        taskList.push(Holi)
        console.log(taskList);
        rl.close();
      });
    });
  });
