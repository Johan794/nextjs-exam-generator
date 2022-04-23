

export default function handler(req, res) {
    const exams = require('../../util/db_exams.json');    
    let exam = exams.find(exam => exam.id == (req.query.id));

    if(exam == undefined){
        res.status(404).json({
            message: "Exam not found"
        });
    }else{
        res.json(exam);
    }
    
}