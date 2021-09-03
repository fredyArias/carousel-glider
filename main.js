function showMenu() {
    do {
        console.clear();
        console.log(`Hola, bienvenido al ToDo List, Ingrese:
        1. Para crear una nueva tarea
        2. Para listar las tareas
        3. Para modificar una tarea
        4. Para eliminar una tarea
        5. Para salir
        `);

        let stdin = process.openStdin()
        stdin.addListener('data', function (d) {
        const opcion = d.toString().trim()
        switch (opcion) {
            case '1': 
                createTask()
                break;
            case '2': 
                listTask()
                break
            case '3': 
                updateTask()
                break
            case '4': 
                delateTask()
                break
            case '5':
                    exitMenu()
                break   
            default:
                console.log('No es una opción valida');
                break;
            }
        })
    } while(opcion =! 5);
    
}

showMenu()

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




    