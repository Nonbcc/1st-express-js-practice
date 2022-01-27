const express  = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/concat', (req, res) => {

    res.json({concat_string : `${req.body.str1}-${req.body.str2.toUpperCase()}`});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)