const express  = require('express');
const uuid = require('uuid');
const lecturerDetail = require('./lecturerDetail')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const test = {
    data: 'new lecturer detail'
}

// Create Member
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

// Update Member
app.put('/lecturer/:id', (req, res) => {
    const found = lecturerDetail.some(s => s.id === parseInt(req.params.id))

    if(found){
        const updMember = req.body
        lecturerDetail.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.department = updMember.department ? updMember.department : member.department;
                member.teachingHours = updMember.teachingHours ? updMember.teachingHours : member.teachingHours;

                res.json({ msg: 'Member updated', member});
            }
        });
    }else{
        res.status(400).json({ msg: `No course with the code of ${req.params.code}` })
    }
    
})

// Delete Member
app.delete('/lecturer/:id', (req, res) => {
    const found = lecturerDetail.some(s => s.id === parseInt(req.params.id))

    if(found){
        res.json({ msg: 'Member deleted',lecturerDetail: lecturerDetail.filter(c => c.code !== req.params.code)})
    }else{
        res.status(400).json({ msg: `No course with the code of ${req.params.code}` })
    }
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)