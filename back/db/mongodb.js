const mongoose = require('mongoose');




async function connectDb({ host, port, dbName}) {
    
    

    const uri = `mongodb://${host}:${port}/${dbName}`;

    console.log(  uri );
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
    });

    // Resto de la configuración de tu aplicación Express...

 

}

module.exports = connectDb;