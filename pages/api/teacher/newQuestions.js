import {conn} from "../../util/database";
export default async function handler(req, res) {
    const { method, body } = req;
    if (method === "POST") {
        try {
            const {question,subject,correct,option1,option2,option3,option4,percentaje,exam_id} = body;
            const result = await conn.query(
                     `
                     insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
                        values ($1,$2,$3,$4,$5,$6,$7,$8,$9);
                    `,
                [question,subject,correct,option1,option2,option3,option4,percentaje,exam_id]
            );
            res.send({
                status: 'success',
                data: result.rows[0]
            });

        } catch (error) {
            res.send({
                status: "error",
                message: error.message,
            });
        }
    }

}