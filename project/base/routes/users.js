const express = require('express');
const router = express.Router();
const Users = require('../model/user')

router.post('/api/user/register', function (req, res) {
    const newUser = new Users({ // 用户传参
        name: req.body.name,
        password: req.body.password,
    });
    const name = req.body.name;
    Users.find({
        name: name
    }, (err, docs) => {
        if (docs.length > 0) {
            res.send({
                isSuccess: false,
                message: '用户名已存在'
            })
        } else { // 向logins集合中保存数据
            newUser.save(err => {
                const datas = err ? {
                    isSuccess: false
                } : {
                    isSuccess: true,
                    message: '注册成功'
                }
                res.send(datas);
            });
        }
    })
});


module.exports = router;