import {conn} from "../../util/database";

//esta clase es para seleccionar el examen si escribe bien el codigo de acceso
export default async function handler(req, res) {
  console.log(req.query.id);
  try {
    const result = await conn.query(
      `
      SELECT * FROM exams e WHERE e.access_code = $1;
      `,
      [req.query.id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.send({
      status: "error",
      message: error.message,
    });
  }
}
