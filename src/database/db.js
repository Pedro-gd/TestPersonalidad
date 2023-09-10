const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host:'localhost',
    port: 3305,
    user: 'root',
    password: '',
    database: 'Personalidad'
});

conexion.connect((error)=>{
    if(error){
        console.log("El error de conexión es: " + error);
        return
    }
    console.log("Conexión estaleblecida correctamente");
});

module.exports = conexion;