import {conn} from '../../util/database';

export default async  function handler(req, res) {
    const {method, body} = req;
    if(method === "POST"){
        if(body.name === '' || body.email === '' || body.password === ''){
            res.send({
                status: 'error',
                message: 'All fields are required'
            });
        }else{
            const {name, email, password,student} = body;
            try {
                const result = await conn.query(`
                INSERT INTO users(username,user_password,email,is_estudent)
                VALUES($1, $2, $3,$4)
                RETURNING id, username, user_password ,email, is_estudent;
            `, [name, password, email,student]);
                res.send({
                    status: 'success',
                    data: result.rows[0]
                });
            } catch (error) {
                res.send({
                    status: 'error',
                    message: error.message
                });
            }
           
        }
    }

}












/*
export default function handler(req, res) {
    const accounts = require('../../util/db_accounts.json');
    const {method,body} = req;
    const fs = require('fs');
    
    if (method === "POST") {
        if(body.name === '' || body.email === '' || body.password === ''){
            res.send({
                status: 'error',
                message: 'All fields are required'
            });
        }else{
            accounts.push({
                id: accounts.length + 1,
                name: body.name,
                email: body.email,
                password: body.password,
                student: body.student
            });
            fs.writeFile('pages/util/db_accounts.json', JSON.stringify(accounts), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            console.log(accounts)
            res.statusCode = 200;
            res.send(
    
                {
                    status: 'success',
                    message: 'account created'
                }
            );
          
        }
        
    }else{
        res.send(

            {
                status: 'error',
                message: 'account already exists'
            }
        );
    }
    
}
*/