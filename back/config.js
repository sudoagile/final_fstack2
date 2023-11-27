require('dotenv').config();

const config = {
    appConfig: {
        port: process.env.APP_PORT || 3000,
        host: process.env.APP_HOST || 'http://localhost'
    },
    dbConfig: {
        port: process.env.DB_PORT || 27017,
        host: process.env.DB_HOST || 'localhost',
        dbName: process.env.DB_NAME || 'DigiDB'
    }
};

// Validación básica para asegurarse de que las variables de entorno necesarias estén definidas
if (!process.env.DB_NAME) {
    throw new Error('Falta definir la variable de entorno DB_NAME en .env');
}

module.exports = config;
