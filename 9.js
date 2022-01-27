const express  = require('express');
const courseDetail = require('./courseDetail')

const app = express();

app.get('/course', (req, res) => {
    const semesterInput = req.query.semester;
    const isActive = (req.query.active === 'true');
    const isNotActive = (req.query.active === 'false');

    if(isActive && semesterInput){
        const found = courseDetail.some(course => course.active === true && course.semester === parseInt(req.query.semester))
        if(found){
            return res.json({data: courseDetail.filter(course => course.active === true && course.semester === parseInt(req.query.semester))});
        } else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.`})
        } 
    } else if(isNotActive && semesterInput){
        const found = courseDetail.some(course => course.active === false && course.semester === parseInt(req.query.semester))
        if(found){
            return res.json({data: courseDetail.filter(course => course.active === false && course.semester === parseInt(req.query.semester))});
        } else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' and 'active=${req.query.active}' is not found.`})
        }
    }

    if(isActive){
        return res.json({data: courseDetail.filter(course => course.active === true)});
    } else if(isNotActive){
        return res.json({data: courseDetail.filter(course => course.active === false)});
    } 

    const otherInvalidActive = req.query.active;
    
    if(otherInvalidActive){
        return res.status(400).json({error_message: `Input 'active=${req.query.active}' is invalid (boolean data type only.)`});
    }

    if(semesterInput){
        const found = courseDetail.some(course => course.semester === parseInt(req.query.semester));
        if(found){
            return res.json({data: courseDetail.filter(course => course.semester === parseInt(req.query.semester))});
        } 
        else{
            return res.status(400).json({error_message: `Request 'semester=${req.query.semester}' is not found.`});
        }
    }

    res.json({data: courseDetail});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT)