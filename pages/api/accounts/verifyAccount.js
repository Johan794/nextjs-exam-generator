
export default function handler(req, res) {
    const db = require('../../util/db_accounts.json');
    const {method,body} = req;
    if(method === 'POST'){
        const {email,password} = body.data;
        console.log(email,password)
        const account = db.find(account => account.email == email && account.password == password);
        if(account == undefined){
            console.log('account not found');
            res.send({
                status: 'error',
                message: 'account not found'
            });
        }else{
             console.log('account found');
              res.send({
                status: 'success',
                message: 'account found'
            });
        }
    }
}