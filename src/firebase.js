const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const path = require('path');
require('dotenv').config();

const serviceAccount = require(path.join(__dirname, '..', process.env.FIREBASE_CREDENTIALS_PATH));

// Inicializamos la aplicación
const app = initializeApp({
  credential: cert(serviceAccount)
});

// Obtenemos la instancia de autenticación basada en esta app
const auth = getAuth(app);

console.log("¡Firebase Admin SDK inicializado correctamente con Auth!");

module.exports = auth;