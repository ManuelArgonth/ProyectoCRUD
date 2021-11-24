//Archivo principal llamado a apps

//buscar archivo configuración de servidor express
const app = require('./config/server');


//Estructuras rutas del servidor
require('./app/rutas/productos')(app);


//iniciar servidor
//app.get-->Obtengo puerto de app
app.listen(
    app.get('port'), ()=>{
        console.log('servidor funcionando en puerto', app.get('port'));
    }
);