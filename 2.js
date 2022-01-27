const express  = require('express');

const app = express();

app.get('/hello', (req, res) =>{
    res.send('<p>hello endpoint</p>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)