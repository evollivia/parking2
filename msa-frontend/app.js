let createError = require('http-errors');
let express = require('express');
let path = require('path');
// nodejs에서 제공하는 세션 관리 패키지
const session = require('express-session');
let port = 3000;

let indexRouter = require('./public/index');

let app = express();

// session 설정
// resave, saveUninitialized - 로그인 하지 않은 클라이언트의 세션은 저장 x
app.use(session({
  secret: 'Hello, World!!',   // 세션 데이터 암호화시 사용하는 비밀키
  resave: false,  // 세션 데이터 수정시 재저장 여부
  saveUninitialized: false  // 세션 초기화 곤련 설정
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 서버 시작
app.listen(port, () => {
  console.log(`frontend server on port ${port}`)
})

module.exports = app;
