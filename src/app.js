const express = require('express');
const peoploRoutes = require('./routes/peopleRoutes');

const app = express();

app.get('/', (req, res) => {res.status(200).json({message: 'Hello World'})});

app.use(express.json());
app.use('/cadastro', peoploRoutes);

module.exports = app;