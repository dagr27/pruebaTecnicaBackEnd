var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

//Metodo post para autenticar
router.post('/auth', userController.auth);
//Metodo post para insertar y crear una nueva materia
router.post('/insertMateria', userController.insertMateria);
//Metodo post para insertar y crear una nueva materia
router.post('/insertClases', userController.insertClass);
//Metodo post para insertar nuevos usuarios independientemente el rol
router.post('/insertUser', userController.insertUser);
//Metodo post para agregar calificaciones por alumno
router.post('/addCalifications', userController.addCalifications);  

module.exports = router;