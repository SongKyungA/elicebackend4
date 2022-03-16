const express = require("express")
const session = require("express-session")
const app = express()

app.use(session({
    secret: "elice backend service",
    // 세션을 접속할 때 마다 다시 저장할지 여부. 보통 false
    // 변경사항이 없을 시에도 그 session을 다시 저장하는 옵션
    resave: false, 
    // 새로 생성된 session에 아무런 작업이 이루어지지 않은 상황
    saveUninitialized: false,
}))

app.get('/', (req, res) => {
    if (!req.session.num) {
        // 처음 들어온 사람에게 num = 1, userName = '첫접속자'를 넣음
        req.session.num = 1
        req.session.userName = '첫접속자'
    } else {
        console.log(req.session)
        req.session.num += 1
    }
    res.send(`<h1>You visit our site ${req.session.num} times...</h1>`)
})

app.listen(3000, () => {
    console.log('web server 3000 listening...')
})