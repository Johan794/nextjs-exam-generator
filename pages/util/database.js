import {Pool} from 'pg';
let conn;

if(!conn){
    conn = new Pool({
        user: 'postgres',
        password: 'introducir-clave-aca',
        host: 'localhost',
        port: 5432,
        database: 'pageDB'
    });
}

export {conn};