// Esta aplicación NodeJS y Express es un ejemplo de como servir contenido estático.

// Para ver a NodeJS y Express sirviendo contenido dinámico que incluya publicada una aplicación cliente
// de Angular cuyos compilados están en la carpeta public.
// abra el proyecto webserver-angular-1.0.0

// Para ver a NodeJS y Express sirviendo contenido dinámico con handlebars sin incluir app cliente,
// abra el proyecto webserver-dynamic-1.0.0


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Servir contenido estático
app.use(express.static(__dirname + '/public', {
    extensions: ['html', 'htm'] // Esto evita que se tenga que ingresar la extensión en la url del navegador
}));

app.get('/about', (req, res) => {

    res.sendFile(__dirname + '/public/about.html');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});