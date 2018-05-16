const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myblog';
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    let uname = req.query.uname;
    let upwd = req.query.upwd;
      MongoClient.connect(url, function(err, client){
        let col = client.db(dbName).collection('user');
        col.find({}).toArray(function (err, result) {
            if (err) throw err;
            if(result[0].uname===uname&&result[0].upwd===upwd){
                req.session.uid = result[0].uid;
                res.json({code:1,msg:"登录成功"});
            }else{
                res.json({code:-3,msg:"用户名或密码有误"});
            }
            client.close();
        });
    })
});
router.get("/revise",(req,res)=>{
    let oldpwd = req.query.oldpwd;
    let newpwd = req.query.newpwd;
    let comfirmpwd = req.query.comfirmpwd;
    if(newpwd!==comfirmpwd){
        res.json({code:-3,msg:"两次密码输入不一致"});
        return
    }
    MongoClient.connect(url, function(err, client){
        let col = client.db(dbName).collection('user');
        col.find({}).toArray(function (err, result) {
            if (err) throw err;
            if(result[0].upwd!==oldpwd){
                res.json({code:-1,msg:"旧密码输入不正确"});
                }else if(result[0].upwd===oldpwd){
                col.update({"uid":1},{$set:{"upwd":newpwd}},function(err,result){
                    if(err) throw err;
                    res.json({code:1,msg:"操作成功"})
                       })}
            client.close();
            });
        })
});

module.exports = router;