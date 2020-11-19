const descripcion = {
    alias : 'd',
    demand : true,
    desc : 'describe la tarea por hacer'
}
const completado ={
    default : true,
    alias : 'c',
    desc : 'marca como completado o imcompleta la tarea'
}

const argv = require('yargs')
            .command('crear','crea una nueva tarea',{
                descripcion
            })
            .command('actualizar','actualiza una tarea si existe',{
                descripcion,
                completado
            })
            .command('borrar','borrar un elemento o varios de la base de datos',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}