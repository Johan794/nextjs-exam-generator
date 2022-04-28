import {Pool} from 'pg';
let conn;

if(!conn){
    conn = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'exams_generator',
        password: '15164414',
        port: 5432
    });
}

export {conn};