// routes/postRoutes.js
const express = require('express');
const router = express.Router();
// Define la ruta para crear un post
router.post('/createpost', (req, res) => {
  res.json({ mensaje: "Post creado con éxito" });
});

module.exports = router;
