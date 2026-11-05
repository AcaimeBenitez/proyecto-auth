const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares para procesar formularios HTTP POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar y usar las rutas de autenticación
const authRoutes = require('./src/authRoutes');
app.use('/', authRoutes);

// Redirección de la raíz al login
app.get('/', (req, res) => res.redirect('/login'));

app.listen(PORT, () => {
    console.log(`Servidor activo y corriendo en http://localhost:${PORT}`);
});
