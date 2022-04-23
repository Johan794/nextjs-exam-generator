//import accounts from '../../util/db_accounts'
export default function handler(req, res) {
    const accounts = require('../../util/db_accounts.json');
    const {method,body} = req;
    const fs = require('fs');
    console.log("Esta hablando el api")
    console.log("asi está la base de datos")
    console.log(accounts)
    console.log("Asi está el body")
    console.log(body)
    console.log(body.data.name)
    console.log(body.data.email)
    console.log(body.data.password)
    const check = accounts.find(account => account.email === body.data.email && account.password === body.data.password && account.name === body.data.name);
    if (method === "POST" && check === undefined) {
        accounts.push({
            id: accounts.length + 1,
            name: body.data.name,
            email: body.data.email,
            password: body.data.password
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
      
    }else{
        res.send(

            {
                status: 'error',
                message: 'account already exists'
            }
        );
    }
    
}