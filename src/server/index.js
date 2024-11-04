// src/server/index.js

const express = require('express');
const next = require('next');

// Define si estás en modo de desarrollo o producción
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const postRoutes = require('./routes/post/createpost');

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use('/api', postRoutes); // Usa el router en la ruta base "/api"
  
  server.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde la API de Express!' });
  });

  // Maneja todas las rutas de Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Servidor listo en http://localhost:${PORT}`);
  });
});  