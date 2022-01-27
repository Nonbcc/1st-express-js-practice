const express  = require('express');
const courseDetail = require('./courseDetail')

const app = express();

app.get('/course', (req, res) => {
    res.json(courseDetail)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)