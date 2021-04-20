require('./db'); //加载db.js
const path = require('path'); //path对象，规范连接和解析路径
const express = require('express'); //引入express库
const app = express(); //写一个服务
const bodyParser = require('body-parser');//用于req.body获取值的
app.use(bodyParser.json());



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
const blogsRouter = require('./routes/blogs')

app.use(express.static(path.join(__dirname, './views/dist')));
app.use('/', blogsRouter); //app中注册users接口
app.use('/api', blogsRouter); //app中注册users接口


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});
///======= error handlers  错误处理程序  E========//
module.exports = app;