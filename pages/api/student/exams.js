export default function handler(req, res) {
   const db = require('../../util/db_exams.json');
   res.json(db);
}