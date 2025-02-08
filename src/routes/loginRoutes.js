const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const {email, password} = req.params
  try {
    const [result] = await peopleDB.findByEmail(email);
    if (result === email) {

    }
  } catch (err) {
    
  }
})

module.exports = router;