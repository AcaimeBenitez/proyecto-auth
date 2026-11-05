const express = require('express');
const router = express.Router();
const authController = require('./authController');

// Rutas para Registro
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

// Rutas para Login
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Ruta de Inicio Protegida
router.get('/home', authController.getHome);

// Cerrar sesión (redirección limpia)
router.get('/logout', (req, res) => res.redirect('/login'));

module.exports = router;
