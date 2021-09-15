function showMenu(additaionalMessage =  '') {

        printMenuPrincipal(additaionalMessage)
        let stdin = process.openStdin()
        stdin.addListener('data', function (d) {
            console.log(d)
        const currentOption = d.toString().trim()
        switch (currentOption) {
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
}

const toDoList = []

function printMenuPrincipal(additaionalMessage){
    console.clear();
    console.log(`${additaionalMessage}
    Hola, bienvenido al ToDo List, Ingrese:
    1. Para crear una nueva tarea
    2. Para listar las tareas
    3. Para modificar una tarea
    4. Para eliminar una tarea
    5. Para salir
    `);
}

function createTask() {
    console.clear();
    console.log(`esscriba la tarea 
        si quieres cerra el programa selecciona 1
    `);
    let stdin = process.openStdin()

    stdin.addListener('data', function (d) {
        const currentOption = d.toString().trim()
        switch (currentOption) {
            case '1':
                process.exit() 
            break;
            default:
                toDoList.push(currentOption)
                showMenu("mensaje guardado")
                console.log(stdin,'----')
                stdin.exit()
            break;
            }
        })
    console.log('Creando nueva tarea')
}

function listTask() {

    console.clear()
    console.log('Listando tareas que son')
    for( let index in toDoList){
        console.log(`tarea ${index + 1} ${toDoList[index]}`)
    }
    console.log(` selecccion 1 para terminar o cualquoer texto para ir al menu principal`);
    let stdin = process.openStdin()
    stdin.addListener('data', function (d) {
        const currentOption = d.toString().trim()
        switch (currentOption) {
            case '1':
                process.exit() 
            break;
            default:
                showMenu()
            break;
            }
        })


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

showMenu()




    