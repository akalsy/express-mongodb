const express = require('express');
const router = express.Router();
const Blogs = require('../model/blog')

router.post('/api/blog/createblog', (req, res) => {
    // 创建一条blog
    if (!req.body.title) {
        res.send({
            isSuccess: false,
            message: "请输入标题"
        })
        return;
    }
    const newblog = new Blogs({
        title: req.body.title,
        contenthtml: req.body.contenthtml
    });
    newblog.save((err) => {
        const datas = err ? {
            isSuccess: false,
            messageL: "保存失败"
        } : {
            isSuccess: true,
            message: '保存成功'
        }
        res.send(datas);
    })
})


router.get('/api/blog/querylist', (req, res) => {

})

module.exports = router;