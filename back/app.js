const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

// Si estás utilizando MongoDB y Mongoose, puedes descomentar estas líneas
// const mongoose = require('mongoose');
// mongoose.set('debug', true);

// Rutas para los movimientos de Digimon
const digimonMovesRoutes = require('./routes/digimonMoves');
const { appConfig } = require('./config');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar la sesión aquí, si es necesario
// app.use(session({ ... }));

// Utiliza las rutas de movimientos de Digimon
app.use('/api', digimonMovesRoutes);

// Aquí puedes añadir otras rutas o configuraciones adicionales

const port = 8081 //appConfig.port || 3000; // Asegúrate de que appConfig.port esté correctamente definido
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
