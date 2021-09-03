
console.log(`Opciones del menu
1. guardar
2. borrar ultimo dato
3. list
`)
var stdin = process.openStdin()
stdin.addListener('data', function (d) {
const p = d.toString().trim()
switch (p) {
    case "1": console.log("Hola");
        
        break;

    default: process.exit()
        break;
}
console.log('Tu ata guadada es :' + p)

})