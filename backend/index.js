const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

/* Configuración de PostgreSQL
const pool = new Pool({
  user: 'TU_USUARIO',
  host: 'localhost',
  database: 'TU_BASE_DE_DATOS',
  password: 'TU_CONTRASEÑA',
  port: 5432,
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});*/
// Usuarios simulados
const usuarios = [
    { email: 'admin@gmail.com', password: '1234' },
    { email: 'pepe@gmail.com', password: 'qwerty' }
  ];
  
  // Ruta de prueba
  app.get('/', (req, res) => {
    res.send('Backend funcionando sin base de datos');
  });
  
  // Ruta de login
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    const usuario = usuarios.find(u => u.email === email && u.password === password);
  
    if (usuario) {
      res.json({ token: 'token-falso-123' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
