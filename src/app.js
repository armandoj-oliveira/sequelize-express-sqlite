const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
    res.status(200).send({ mensage: 'Boas-vindas à API!' });
});

module.exports = app;