const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.port || 8000;
const cors = require("cors");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB 연결됨");
});

//조회 기능
app.get("/api", (req, res) => {
  const sqlQuery = "select * from comment order by id desc";
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
//댓글 생성 기능
app.post("/api", (req, res) => {
  const nickname = req.body.nickname;
  const text = req.body.text;
  const score = req.body.score;
  const like = 0;
  const sqlQuery =
    "INSERT INTO comment(nickname,text,score,liked) VALUES (?,?,?,?)";
  db.query(sqlQuery, [nickname, text, score, like], (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

//좋아요개수 가져오기
app.get("/api/like/:id", (req, res) => {
  const sqlQuery = "select like from comment where id= " + req.params.id;
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

// 좋아요 증가
app.put("/api/like", (req, res) => {
  const id = req.body.id;
  const sqlQuery =
    "UPDATE comment SET liked=(SELECT LIKED Where id = ?) + 1 WHERE id= ?";
  db.query(sqlQuery, [id, id], (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
