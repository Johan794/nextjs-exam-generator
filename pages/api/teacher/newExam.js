import {conn} from "../../util/database";
export default function handler(req, res) {
    //TODO: Implement
    const {method,body} = req;
  
    if(method === "POST"){

    }else{
        res.send({
            status: 'error',
            message: 'Not allowed'
        });
    }
    
}

