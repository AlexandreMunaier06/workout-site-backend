const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({message: `Pessoa cadastrada com sucesso com o id ${result.id}`});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Ocorreu um erro ao cadastrar uma pessoa'});
  }
});

router.get('/', async (_req, res) => {
  try {
    const result = await peopleDB.findAll();
    result ? res.status(200).json(result) : res.status(400).json({message: 'não existem pessoas no bd'});
  } catch (err) {
    res.status(500).json({message: err.sqlMessage})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await peopleDB.findById(id);
    result ? res.status(200).json(result) : res.status(400).json({message: 'Pessoa não encontrada.'});
  } catch (err) {
    res.status(500).json({message: err.sqlMessage});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await peopleDB.update(id);
    result ? res.status(200).json(result) : res.status(400).json({message: 'Pessoa não encontrada.'});
  } catch (err) {
    res.status(500).json({message: err.sqlMessage});
  }
})


module.exports = router;