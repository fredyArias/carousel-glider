let opcion = 5;

function showMenu() {
    console.clear();
    console.log('Hola, bienvenido al ToDo List, Ingrese:\n')
    console.log('1. Para crear una nueva tarea');
    console.log('2. Para listar las tareas');
    console.log('3. Para modificar una tarea');
    console.log('4. Para eliminar una tarea');
    console.log('5. Para salir\n');
}

do {
    showMenu()
    switch (opcion) {
        case 1: 
            createTask()
            break;
        case 2: 
            listTask()
            break
        case 3: 
            updateTask()
            break
        case 4: 
            delateTask()
            break
        case 5:
             exitMenu()
            break   
        default:
            console.log('No es una opción valida');
            break;
        }
    } while (opcion != 5)

function createTask() {
    console.log('Creando nueva tarea')
}

function listTask() {
    console.log('Listando tareas')
}

function updateTask() {
    console.log('Actualizando tarea')
}

function delateTask() {
    console.log('Eliminando tarea')
}

function exitMenu(){
    console.log('Saliendo...');
}

showMenu(opcion);

    