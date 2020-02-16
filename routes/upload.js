var express = require('express');
var router = express.Router();

const fs=require('fs')
const multer=require('multer')

router.post('/:path/:id',  function(req, res) {
    let id=req.params.id;
    let path = req.params.path;
    //var storage = multer.memoryStorage()
//磁盘临时文件的方案
    const storage = multer.diskStorage({
        //存储的位置
        destination(req, file, cb){
            cb(null, 'public/' + path + "pic/")
        },
        //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
        filename(req, file, cb){
            let extName = file.originalname.slice(file.originalname.lastIndexOf('.'));
            let name= id + extName;
            cb(null, name)
        }
    })

//设置过滤规则（可选）
    var imageFilter = function(req, file, cb){
        var acceptableMime = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
        //微信公众号只接收上述四种类型的图片
        if(acceptableMime.indexOf(file.mimetype) !== -1){
            cb(null, true)
        }else{
            cb(null, false)
        }
    }

//设置限制（可选）
    var imageLimit = {
        fieldSize: '2MB'
    }
    let upload = multer({
        storage: storage,
        fileFilter: imageFilter,
        limits: imageLimit }).single('file')
    upload(req,res, function(err){
        if (err instanceof multer.MulterError) {
            // 发生错误
            console.log("mutlter errj" + err);
        } else if (err) {
            // 发生错误
            console.log("common errj" + err);
        } else {
            const url = "/" + path +"pic/" + req.file.filename;
            if(path == "singer"){
                let dao =require('../dao/SingerDao');
                dao.updatePhotoPath(id,url,function(res){

                })

            } else if(path == "album"){
                let dao =require('../dao/AlbumDao');
                dao.updatePhotoPath(id,url,function(res){

                })
            }
            res.json({"url":url})
            //console.log(url)
            //console.log(req.file)
        }

    })


});



module.exports = router;
