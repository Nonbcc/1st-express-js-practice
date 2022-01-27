const express  = require('express');
const { status } = require('express/lib/response');
const courseDetail = require('./courseDetail')

const app = express();

app.get('/course/:code', (req, res) => {
    const found = courseDetail.some(s => s.code === req.params.code)

    if(found){
        res.json(courseDetail.filter(c => c.code === req.params.code))
    }else{
        res.status(400).json({ msg: `No course with the code of ${req.params.code}` })
    }
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)