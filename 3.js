const express  = require('express');
const path = require('path')

const app = express();

const test = {
    message: 'Hello JSON'
}

app.get('/helloJson', (req, res) => {
    res.json(test)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)