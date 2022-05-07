export default async function handler(req, res){
    const {method, body} = req
    if(method === 'POST'){
        const data = require('../../util//test_exams.json')
        res.json(data)
    }
}