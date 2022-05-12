const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require('body-parser');
const PORT=process.env.port || 8000;
const cors=require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

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



//조회 기능
app.get("/",(req,res)=>{
    const sqlQuery="select * from comment";
    db.query(sqlQuery,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    }); 
})
//댓글 생성 기능
app.post("/",(req,res)=>{
        const nickname=req.body.nickname;
        const text=req.body.text;
        const score=req.body.score;
        const like=req.body.like;
        const sqlQuery="INSERT INTO comment(nickname,text,score,like) VALUES (?,?,?,?)";
        // const sqlQuery=`INSERT INTO comment (id,nickname,text,score,like) VALUES (1,'테스트네임','댓글입니당',5,23)`;
        db.query(sqlQuery,[nickname,text,score,like],(err,result)=>{
            if(err)throw err;
            console.log(result);
            res.send(result);
        }); 
})

//좋아요개수 가져오기
app.get("/like/:id",(req,res)=>{
    const sqlQuery="select like from comment where id= "+req.params.id;
    db.query(sqlQuery,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    }); 
})

// 좋아요 증가
app.put("/like",(req,res)=>{
            const id=req.body.id;
            const like=req.body.like;
            const sqlQuery="UPDATE comment SET like= ? WHERE id= ?";
            db.query(sqlQuery,[like,id],(err,result)=>{
                if(err)throw err;
                
                console.log(result);
                res.send(result);
                res.redirect("/");
            }); 
})

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});
