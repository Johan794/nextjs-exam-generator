
export default function handler(req, res) {
    //TODO: Implement
    const db = require('../../util/db_exams.json');
    const {method,body} = req;
    const fs = require('fs');
    if(method === "POST"){

    }else{
        res.send({
            status: 'error',
            message: 'Not allowed'
        });
    }
    
}

