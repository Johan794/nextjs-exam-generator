import { conn } from "../../util/database";
export default async function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    try {
      const result = await conn.query(
        `
            SELECT * FROM questions q WHERE q.exam_id = $1 ;
            `,
        [body.exam_id]
      );

      if (result.rows[0] === undefined) {
        res.send({
          status: "error",
          message: "Questions",
        });
      } else {
        res.json(result.rows);
      }
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  } else {
    res.send({
      status: "error",
      message: "Not allowed",
    });
  }
}
