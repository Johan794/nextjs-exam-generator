
export default function handler(req, res) {
    res.send("Hello "+ req.query.id)
    //res.json(req.query.id);
}