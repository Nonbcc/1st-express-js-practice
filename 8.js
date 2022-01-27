const express  = require('express');
const uuid = require('uuid');
const lecturerDetail = require('./lecturerDetail')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const test = {
    data: 'new lecturer detail'
}

app.post('/lecturer', (req, res) =>{
    const newMember = {
        id: req.body.id,
        name: req.body.name,
        department: req.body.department, 
        teachingHours: req.body.teachingHours
    }

    if(!newMember.name || !newMember.department){
        return res.status(400).json({ msg: 'Please include a name, department and teachingHours'})
    }

    lecturerDetail.push(newMember)
    res.json(test)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)