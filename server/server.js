import express from 'express';
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudreact'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result); 
    })
})

app.post('/users', (req, res) => {
    const sql = "INSERT INTO users (`nombre`, `apellido`, `email`) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.apellido,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json({ err });
        return res.json(result); 
    })
})

app.get('/read/:nombre', (req, res) => {
    const sql = "SELECT * FROM users WHERE nombre= ?";
    const nombre=req.params.nombre;
    db.query(sql,[nombre], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result); 
    })
})

app.put('/update/:nombre', (req,res)=>{
    const sql='UPDATE users SET `nombre`=?, `apellido`=? , `email`=? WHERE nombre=?'
    const nombre=req.params.nombre;
    db.query(sql,[req.body.nombre, req.body.apellido, req.body.email, nombre], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result); 
    })
})


app.delete('/delete/:nombre',(req,res)=>{
    const sql="DELETE FROM users WHERE nombre=?"
    const nombre=req.params.nombre;
    db.query(sql,[ nombre], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result); 
    })
})

app.listen(8084, () => {
    console.log("Listening");
})
