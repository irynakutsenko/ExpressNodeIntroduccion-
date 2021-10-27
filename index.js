const { response, request } = require("express");
const express = require("express");

const servidor = express();
//------------------ejercicio 01
servidor.get("/", function(request, response) {
    response.send('<h1>Hola Mundo</h1><p>desde express</p>');
});
//------------------ejercicio 02
servidor.get("/numeros/:number", function(request, response) {
    let variableNumber = request.params.number;
    response.send("El numero " + variableNumber);
});
//------------------ejercicio 03

let arrayNombres = ["Iryna", "Jose", "Peio", "Erlantz"]

servidor.get("/personas", function(request, response) {
    response.send("los nombres son " + arrayNombres)
})

servidor.get("/personas/:parametro", function(request, response) {
        let nombre = request.params.parametro
        response.send("el nombre es " + nombre)
    })
    //-------------ejercicio 04
const privet = require("../express/archivoFourExe");
servidor.get("/saludo", function(request, response) {
    response.send(privet())
});
//-------------ejercicio 05
let nombre = require("../express/objectFive");
servidor.get("/nombre/:name", function(request, response) {

    nombre.object.nombre = request.params.name
    response.send(nombre)
});
servidor.get("/apellido/:apellido", function(request, response) {

    nombre.object.apellido = request.params.apellido
    response.send(nombre)
});
servidor.get("/edad/:edad", function(request, response) {

    nombre.object.edad = request.params.edad
    response.send(nombre)
});
//-----------------ejercicio 06
let arrayEstudiantes = ["Jon", "Raquel", "Jose", "Agata", "Roque", "Cristian", "Alex"];
servidor.get("/estudiantes/:name", function(request, response) {

    arrayEstudiantes.push(request.params.name);
    response.send(arrayEstudiantes);
});
//-----------------ejercicio 07











servidor.listen(3001);