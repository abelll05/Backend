const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Cargar variables de entorno

const app = express();
app.use(express.json());  // Permitir el uso de JSON en las solicitudes

const PORT = process.env.PORT || 5000;

// Conectar con la base de datos
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));

// Rutas
app.get('/', (req, res) => {
  res.send('API de River Plate');
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
