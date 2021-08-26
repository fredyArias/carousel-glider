function menu (opcion){
    console.clear();
    console.log('Hola, bienvenido al ToDo List, Ingrese:\n')
    console.log('1. Para crear una nueva tarea');
    console.log('2. Para buscar una tarea');
    console.log('3. Para modificar una tarea');
    console.log('4. Para eliminar una tarea');
    console.log('5. Para salir\n');
do {
    switch (opcion) {
        case 1: 
            console.log('Creando nueva tarea')
            break;
        case 2: 
            console.log('Buscando tarea')
            break
        case 3: 
            console.log('Modificando tarea')
            break
        case 4: 
            console.log('Eliminando tarea')
            break
        case 5:
            console.log('Saliendo...'); 
            break   
        default:
            console.log('No es una opción valida');
            break;
        }
    } while (opcion != 5)
}

menu(5);

    