const app = require('./app'); // Asegúrate de que la ruta al archivo app.js sea correcta

const port = process.env.PORT || 3000; // Puedes definir un puerto específico para depuración

app.listen(port, () => {
    console.log(`Servidor de depuración corriendo en el puerto ${port}`);
    // Aquí puedes agregar más mensajes de depuración o configuraciones si es necesario
});
