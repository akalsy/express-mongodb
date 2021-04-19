const express = require('express');
const router = express.Router();
const {
  User
} = require('../models')
// 登录表单
// 注册

router.post('/api/register', function (req, res) {
  const newUser = new Users({ // 用户传参
      name : req.body.name,
      password : req.body.password,
      // status: req.body.status
  });
  const name = req.body.name;
  Users.find({name: name},(err, docs) => {
      if(docs.length > 0) {
          res.send({isSuccess: false, message: '用户名已存在'})
      } else { // 向logins集合中保存数据
          newUser.save(err => {
              const datas =  err ? {isSuccess: false} : {isSuccess: true, message: '注册成功'}
              res.send(datas);
          });
      }
  })
});


module.exports = router;