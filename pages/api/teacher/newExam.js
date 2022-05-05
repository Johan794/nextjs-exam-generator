import {conn} from "../../util/database";
export default function handler(req, res) {

    const {method,body} = req;
  
    if(method === "POST"){
        try {
            const {acces_code,subject,creator} = body;
            const insert = await conn.query(
                `
                INSERT INTO exams (access_code,subject_exam,creator) values ($1,'$2,$3);
                RETURNING *;
            `,[acces_code,subject,creator]);
            res.send({
                status: 'success',
                data: insert.rows[0]
            });
        } catch (error) {
            res.send({
                status: 'error',
                message: error.message
            });
        }
    }else{
        res.send({
            status: 'error',
            message: 'Not allowed'
        });
    }
    
}

