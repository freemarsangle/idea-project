import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

const app=express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT","DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup",
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})


con.connect(function (err) {
    if (err){
        console.log("error in connection");
    }
    else {
        console.log("connected");
    }
})
app.get('/getAdmin',(req,res)=>{
    const sql="SELECT * FROM login ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get admin error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getInform',(req,res)=>{
    const sql="SELECT * FROM inform ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get inform error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getGrade',(req,res)=>{
    const sql="SELECT grade FROM theme ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get grade error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getClass',(req,res)=>{
    const sql="SELECT * FROM job_class ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get class error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getForum',(req,res)=>{
    const sql="SELECT * FROM chatdata ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get class error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getJob',(req,res)=>{
    const sql="SELECT * FROM job ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get job error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getStudent',(req,res)=>{
    const sql="SELECT * FROM theme ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get student error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getFeedback',upload.single(''),(req,res)=>{
    const sql="SELECT * FROM feedback ";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error: "Get feedback error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})

app.get('/get/:id',(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM login where id=?";
    con.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error: "Get admin error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getTheme/:id',(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM theme where id=?";
    con.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error: "Get theme error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
app.get('/getJob/:id',(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM job where id=?";
    con.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error: "Get job error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})

app.put('/update_admin/:id',(req,res)=>{
    // console.log(req.body)
    const id = req.params.id;
    const sql = "UPDATE login SET name = ?,email=? WHERE id = ?";
    con.query(sql, [req.body.name,req.body.email,id], (err, result) => {
        if(err) return res.json({Error: "update admin error in sql"});
        return res.json({Status: "Success"})
    })
})
app.put('/update_student/:id',(req,res)=>{
    // console.log(req.body)
    const id = req.params.id;
    const sql = "UPDATE theme SET name = ?,sex=?,number=?,email=?,school=?,profession=?,grade=?,score=? WHERE id = ?";
    con.query(sql, [req.body.name,req.body.sex,req.body.number,req.body.email,req.body.school,req.body.profession,req.body.grade,req.body.score,id], (err, result) => {
        if(err) return res.json({Error: "update theme error in sql"});
        return res.json({Status: "Success"})
    })
})
app.put('/update_job/:id',(req,res)=>{
    // console.log(req.body)
    const id = req.params.id;
    const sql = "UPDATE job SET post = ?,enterprise=?,salary=?,position=?,work_time=?,work_form=?,contact_email=? WHERE id = ?";
    con.query(sql, [req.body.post,req.body.enterprise,req.body.salary,req.body.position,req.body.work_time,req.body.work_form,req.body.contact_email,id], (err, result) => {
        if(err) return res.json({Error: "update job error in sql"});
        return res.json({Status: "Success"})
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM login WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete admin error in sql"});
        return res.json({Status: "Success"})
    })
})
app.delete('/delete_inform/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM inform WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete inform error in sql"});
        return res.json({Status: "Success"})
    })
})
app.delete('/delete_class/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM job_class WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete job_class error in sql"});
        return res.json({Status: "Success"})
    })
})
app.delete('/delete_forum/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM chatdata WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete forum error in sql"});
        return res.json({Status: "Success"})
    })
})
app.delete('/delete_student/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM theme WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete theme error in sql"});
        return res.json({Status: "Success"})
    })
})
app.delete('/delete_job/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM job WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete job error in sql"});
        return res.json({Status: "Success"})
    })
})

app.post('/login',(req,res)=>{
    const sql="SELECT * FROM login Where email=? AND password=?";
    con.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if (err) return res.json({Status: "error",Error:"error in running query"});
        if (result.length>0){
            return  res.json({Status:"Success"})
        }else {
            return res.json({Status: "Error",Error:"error email or password"});
        }
    })
})

app.post('/create',upload.single(''),(req,res)=>{
    const sql="INSERT INTO login (`name`,`email`,`password`)VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    con.query(sql,[values],(err)=>{
        if (err)return res.json({Error:"Inside signup query"});
        return res.json({Status:"Success"})
    })
})
app.post('/add_inform',upload.single(''),(req,res)=>{
    const sql="INSERT INTO inform (`text`)VALUES (?)";
    const values=[
        req.body.text,
    ]
    con.query(sql, [values], (err) => {
        if (err) {
            return res.json({error: "Inside inform query"});
        }
        return res.json({Status:"Success"})
    });
})
app.post('/add_class',upload.single(''),(req,res)=>{
    const sql="INSERT INTO job_class (`job_class`) VALUES (?)";
    const values=[
        req.body.job_class,
    ]
    con.query(sql, [values], (err) => {
        if (err) {
            return res.json({error: "Inside job_class query"});
        }
        return res.json({Status:"Success"})
    });
})
app.post('/add_forum',upload.single(''),(req,res)=>{
    const sql="INSERT INTO chatdata (`viewpoint`) VALUES (?)";
    const values=[
        req.body.viewpoint,
    ]
    con.query(sql, [values], (err) => {
        if (err) {
            return res.json({error: "Inside job_class query"});
        }
        return res.json({Status:"Success"})
    });
})
app.post('/add_student',upload.single(''),
    (req,res)=>{
    const sql="INSERT INTO theme (`name`,`sex`,`number`,`email`,`school`,`profession`,`grade`,`score`,`password`)VALUES (?)";
    const values=[
        req.body.name,
        req.body.sex,
        req.body.number,
        req.body.email,
        req.body.school,
        req.body.profession,
        req.body.grade,
        req.body.score,
        req.body.password
    ]
    con.query(sql,[values],(err)=>{
        if (err)return res.json({Error:"Inside theme query"});
        return res.json({Status:"Success"})
    })
})
app.post('/add_job',upload.single(''),(req,res)=>{
    const sql="INSERT INTO job (`post`,`enterprise`,`salary`,`position`,`work_time`,`work_form`,`contact_email`) VALUES (?)";
    const values=[
        req.body.post,
        req.body.enterprise,
        req.body.salary,
        req.body.position,
        req.body.work_time,
        req.body.work_form,
        req.body.contact_email,
    ]
    con.query(sql, [values], (err) => {
        if (err) {
            return res.json({error: "Inside job query"});
        }
        return res.json({Status:"Success"})
    });
})
app.post('/create_account',upload.single(''),(req,res)=>{
    const sql="INSERT INTO login (`name`,`email`,`password`)VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    con.query(sql,[values],(err)=>{
        if (err)return res.json({Error:"Inside login query"});
        return res.json({Status:"Success"})
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
})
app.listen(8081,()=>{
    console.log("running");
})