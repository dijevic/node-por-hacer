let argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/todo')
let color = require('colors')


console.log(argv)
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('mostrar todas las tareas por hacer')
        let lista = toDo.getListado();
        lista.forEach((tarea)=>{
            console.log('por hacer'.green)
            console.log(tarea.descripcion);
            console.log(`estado : ${tarea.completado}`.red);
            console.log('========================='.blue)
        })

        
        break;
 case 'crear':
     let tarea = toDo.crear(argv.descripcion);
        
        
        break;
case 'actualizar':
    let actualizar = toDo.update(argv.descripcion,argv.completado)
    console.log(actualizar);
    break
case 'borrar':
    let borrar = toDo.borrar(argv.descripcion);
    console.log(borrar);
    break
    default:
        console.log('comando no reconocido')
        break;
}