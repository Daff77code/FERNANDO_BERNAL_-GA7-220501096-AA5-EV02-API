// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
