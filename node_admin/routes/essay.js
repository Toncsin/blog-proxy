const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myblog';
const express = require('express');
const router = express.Router();

router.get('/find',(req,res)=>{
    MongoClient.connect(url,function(err,client){
        let col = client.db(dbName).collection('essay');
        col.find({}).toArray(function(err,result){
            if(err) throw err;
            res.json(result);
            client.close();
        })
    })
});
router.get('/update',(req,res)=>{
    let title = req.query.title;
    let content = req.query.content;
    let iid = req.query.id;
    let id=parseInt(iid);
    MongoClient.connect(url,function(err,client){
        let col = client.db(dbName).collection('essay');
        col.update({"id":id},
            {$set:{"title":title,"content":content}},
            function(err,result){
            if(err)throw err;
               res.json({code:1,msg:"更新成功!"})
                });
        client.close();
    });
});
router.get('/insert',(req,res)=> {
    let title = req.query.title;
    let content = req.query.content;
    MongoClient.connect(url, function (err, client) {
        let col = client.db(dbName).collection('essay');
        col.find().toArray(function (err, result) {
            if (err) throw err;
            let id = result[result.length-1].id + 1;
            col.insert({"id": id, "title": title, "content": content}, function(err, results){
                if (err) throw err;
                col.find().toArray(function (err, items) {
                    if (err) throw err;
                        if(items[items.length-1].id==id){
                            res.json({code:1,msg:"插入成功!"})
                        }});
                client.close();
            })
        })
    })
});
router.get('/delete',(req,res)=>{
    let iid = req.query.id;
    let id = parseInt(iid);
    MongoClient.connect(url,function(err,client){
        let col = client.db(dbName).collection('essay');
        col.remove({"id":id},function(err,result){
                if(err) throw err;
                res.json({code:1,msg:"更新成功!"})
            });
        client.close();
    })
});

module.exports = router;