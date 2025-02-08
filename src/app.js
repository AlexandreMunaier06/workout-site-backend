const express = require('express');
const peoploRoutes = require('./routes/peopleRoutes');
const loginRoutes = require('./routes/loginRoutes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (req, res) => {res.status(200).json({message: 'Hello World'})});

app.use(express.json());
app.use('/cadastro', peoploRoutes);
app.use('/login', loginRoutes);

module.exports = app;