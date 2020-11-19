const fs = require('fs');

let listadoPorHacer = [];


const getListado = ()=>{
    cargarDB()
    return listadoPorHacer

}

const update = (descripcion,completado)=>{
    cargarDB()
    let index = listadoPorHacer.findIndex((tarea)=> tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado
        guardarDB()
        return console.log(`tarea completada, actualizado`)

    }else{
        console.log('algo salio mal')
    }
}

const guardarDB = ()=>{

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('no se pudo guardar el archivo');
        console.log('proceso de guardar exitoso')
    })
    // listadoPorHacer.join('\n')
}

const cargarDB = ()=>{

    try {
    listadoPorHacer = require('../db/data.json')
        
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion)=>{
    cargarDB()
        let toDo = {
            descripcion,
            completado : false
        };
        listadoPorHacer.push(toDo);
        guardarDB()

        return toDo

}

const borrar = (descripcion)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea)=> tarea.descripcion === descripcion);
    if(index >=0){
        listadoNuevo = listadoPorHacer.filter((tarea)=> tarea.descripcion !== descripcion )
        listadoPorHacer = listadoNuevo
        guardarDB()
        return true
    }else{
        console.log('la tarea no existia')
    }
}




module.exports = {
    crear,
    getListado,
    update,
    borrar
}