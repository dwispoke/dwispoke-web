const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require('body-parser');
const PORT=process.env.port || 8000;

app.use(bodyParser.urlencoded({extended:true}));

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"backspoke",
    database:"Backspoke"
})

db.connect((err)=>{
    if(err)throw err;
    console.log("DB 연결됨");
})

app.get("/",(req,res)=>{
    const sqlQuery="select * from comment";
    db.query(sqlQuery,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    }); 
})

app.post("/",(req,res)=>{
        const sqlQuery="INSERT INTO comment(nickname) VALUES ('nick')";
        // const sqlQuery=`INSERT INTO comment (id,nickname,text,score,like) VALUES (1,'테스트네임','댓글입니당',5,23)`;
        db.query(sqlQuery,(err,result)=>{
            if(err)throw err;
            console.log(result);
            res.send(result);
        }); 
})

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});

