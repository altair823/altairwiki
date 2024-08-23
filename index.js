// 기본 설정
const express = require("express");
const app = express();
const PORT = 3000;

// 라우팅 정의
app.get("/", (req, res) => {
    console.log("GET /");
    res.sendFile(__dirname + "/public/index.html");
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
