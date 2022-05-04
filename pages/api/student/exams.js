import conn from "../../util/database";


export default  async function handler(req, res) {
   try {
      const result =  await conn.query(
        `
        SELECT * FROM exams;
        `
      );

      if(result.rows[0]=== undefined){
        res.send({
          status: "error",
          message: "no exams"
        });
      
      }else{
         res.json(result.rows[0]);
      }
      

    } catch (error) {
        res.send({
            status: "error",
            message: error.message
        });
    }
}