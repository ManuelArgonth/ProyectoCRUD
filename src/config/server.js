const express = require('express');
const path =  require('path');
const bodyParser = require('body-parser');

const app =  express();

//CONFIGURACIONES SERVIDOR
//Utilizar puerto entregado por S.0. o 3000
app.set('port', process.env.PORT || 3000);
//Motor de plantillas
app.set('view engine', 'ejs');
//Vistas EJS-->html
//Path.join->une directorios
app.set('views', path.join(__dirname,'../app/vistas'));

//middleware
app.use(bodyParser.urlencoded({
    //False por que se pasaran solo datos a express y no imagenes
    extended: false
}));


//exportarmos el archivo de configuración para que lo utilice index.js
module.exports =app;