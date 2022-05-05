import {conn} from "../../util/database";

export default async function handler(req, res) {
    const {method, body} = req;
    const {userId,rate} = body;
    if(method === "POST"){
        const result = await conn.query(  `
        INSERT INTO grades (id_user,id_exam,grade) values ($1,'$2,$3);
        RETURNING *;
    `, [userId,req.query.examId,rate]);
        res.send({
            status: 'success',
            data: result.rows
        });
    }else{
        res.send({
            status: 'error',
            message: 'Not allowed'
        });
    }
    

}

