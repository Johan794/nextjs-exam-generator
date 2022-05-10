import {conn} from "../../util/database";

export default async function handler(req,res){
    const {method,body} = req
    if(method === 'POST'){
        try{
            const result = await conn.query(
                `SELECT id FROM exams`
            )
            res.json(result.rows)
        }catch(error){
            res.send({
                status:'error',
                message: error.message
            })
        }
    }
}