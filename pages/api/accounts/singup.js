//import accounts from '../../util/db_accounts'
export default function handler(req, res) {
    const accounts = require('../../util/db_accounts.json');
    const {method,body} = req;
    const fs = require('fs');
    if (method === "POST") {
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
        res.send(accounts);
      
    }else{
        console.log("method:",method);
        res.statusCode = 404;
        res.end("Not found");
    }
    
}