var mysql = require('mysql');

//Creamos una función para autenticar a los usuarios desde el backend
module.exports.auth = (req, res) => {
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "pruebatecnica"
    });
    //Nos conectamos al servidor de base de datos
    con.connect(function (err) {
        if (err) throw err;
    });

    var user = req.body.username;
    var password = req.body.password; 
    //Consultamos los datos enviados desde el frontend para validar que coincidan con alguno de los registros de la base de datos.
    con.query("SELECT * from usuario where usuario='"+user+"' and contrasena='"+password+"'", function (err, result) {
        if (result.length != 0) {
            return res.status(200).json({
                "status":true,
                "id":result[0].id,
                "rol":result[0].rol
            });
        }else{
            return res.status(400).json({
                "status":false,
                "id":0,
                "rol":0
            });
        }

    });
    con.end();
}

//Función para añadir usuarios
module.exports.insertUser = (req, res) =>{
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "pruebatecnica"
    });
    //Nos conectamos al servidor de base de datos
    con.connect(function (err) {
        if (err) throw err;
    });
    //Declaramos las variables de interes
    var nombre = req.body.name;
    var usuario = req.body.user;
    var contra = req.body.password;
    var clase = req.body.class;
    var rol = req.body.rol;
    //Realizamos el intento de insertar una nueva materia
    con.query("INSERT INTO usuario(nombre, usuario, contrasena, idClase, rol) VALUES('"+nombre+"', '"+usuario+"', '"+contra+"', "+clase+", "+rol+")", function (err, result) {
        //Si pasa, entonces retornamos true
        if(result){
            return res.status(200).json({
                "status": true
            })
        }
        //Si ocurre un error, retornamos false
        if(err){
            return res.status(400).json({
                "status": false
            })
        }
    });
    con.end();

}

//Función para añadir materias
module.exports.insertMateria = (req, res) =>{
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "pruebatecnica"
    });
    //Nos conectamos al servidor de base de datos
    con.connect(function (err) {
        if (err) throw err;
    });
    var nombreMateria = req.body.materia;
    var idProfesor = req.body.idProfesor;
    //Realizamos el intento de insertar una nueva materia
    con.query("INSERT INTO materia(materia, idprofesor) values('"+nombreMateria+"', "+idProfesor+")", function (err, result) {
        //Si pasa, entonces retornamos true
        if(result){
            return res.status(200).json({
                "status": true
            })
        }
        //Si ocurre un error, retornamos false
        if(err){
            return res.status(400).json({
                "status": false
            })
        }
    });
    con.end();

}

//Función para añadir Clases
module.exports.insertClass = (req, res) =>{
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "pruebatecnica"
    });
    //Nos conectamos al servidor de base de datos
    con.connect(function (err) {
        if (err) throw err;
    });
    var titulo = req.body.titulo;
    //Realizamos el intento de insertar una nueva clase
    con.query("INSERT INTO clase(titulo) values('"+titulo+"')", function (err, result) {
        //Si pasa, entonces retornamos true
        if(result){
            return res.status(200).json({
                "status": true
            })
        }
        //Si ocurre un error, retornamos false
        if(err){
            return res.status(400).json({
                "status": false
            })
        }
    });
    con.end();

}

//Función para agregar notas
module.exports.addCalifications = (req, res) =>{
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "pruebatecnica"
    });
    //Nos conectamos al servidor de base de datos
    con.connect(function (err) {
        if (err) throw err;
    });

    //Declaramos las variables de interes
    var idAlumno = req.body.idAlumno;
    var idMateria = req.body.idMateria;
    var nota = req.body.nota;
    //Realizamos el intento de insertar una nueva calificacion
    con.query("INSERT INTO notas(idAlumno, idMateria, nota) VALUES("+idAlumno+", "+idMateria+","+nota+")", function (err, result) {
        //Si pasa, entonces retornamos true
        if(result){
            return res.status(200).json({
                "status": true
            })
        }
        //Si ocurre un error, retornamos false
        if(err){
            console.log(err);
            return res.status(400).json({
                "status": false,
                "error": err
            })
        }
    });
    con.end();

}