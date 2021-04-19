require('./db'); //加载db.js
const path = require('path'); //path对象，规范连接和解析路径
const cookieParser = require('cookie-parser'); //解析cookie
const logger = require('morgan'); //http请求日志记录器
const express = require('express'); //引入express库
const app = express(); //写一个服务
const createError = require('http-errors');

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200); //让options尝试请求快速结束
  else
    next();
})

// const indexRouter = require('./routes/index'); //加载路由
const usersRouter = require('./routes/users');

///======= 使用中间件 S===========//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './views/dist')));
///======= 使用中间件 E===========//


app.use('/users', usersRouter); //app中注册users接口


// catch 404 and forward to error handler
//捕获404错误，并转向错误处理程序

app.get('*', function (req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './views/dist/index.html'), 'utf-8')
  res.send(html)
})

app.use(function (req, res, next) {
  next(createError(404));
});



///======= error handlers  错误处理程序  S========//
// error handler
// development error handler(开发者错误处理程序)
// will print stacktrace(将会打印堆栈跟踪)
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
///======= error handlers  错误处理程序  E========//
module.exports = app;