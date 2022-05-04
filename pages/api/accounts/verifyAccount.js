import {conn} from "../../util/database";
export default async function handler(req, res) {
    const {method,body} = req;
    if(method === 'POST'){
        const {email,password} = body.data;
        console.log(email,password);
        try {
            const result = await conn.query(`SELECT * FROM users WHERE email = $1 and user_password = $2;`, [email,password]);
           // console.log("QUERY: "+result.rows[0]);
            //console.log(result.rows[0]);
            if(result.rows[0] === undefined){
                res.send({
                    status: 'error',
                    message: 'email or password incorrect'
                });
            }else{
                res.send({
                    status: 'success',
                    data: result.rows[0]
                });
            }
        }catch (error) {
            res.send({
                status: 'error',
                message: error.message
            });
        }
    }
}