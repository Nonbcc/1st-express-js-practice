const express  = require('express');
const courseDetail = require('./courseDetail')

const app = express();

app.get('/course', (req, res) => {
    if(!req.query.active){
        res.json(courseDetail.filter(c => c.active === true))
    }else{
        res.status(400).json({ msg: `No course with the code of ${req.params.active}` })
    }
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)