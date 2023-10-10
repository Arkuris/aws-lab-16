'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/golfclub', (req, res) => {
  res.send('You got golf clubs!');
});

app.listen(PORT, () => {
  console.log('CF Web Services running!');
});