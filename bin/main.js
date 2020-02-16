const mongoose=require('mongoose')
const http=require('http')
require('../model')
let app=require('../app')
let server=http.createServer(app)

mongoose.connect("mongodb://localhost/music",function (err) {

    if(!err){
        console.log("mongodb 已连接!")
        server.listen(3000,function (err) {
            if(!err){
                console.log("express 服务器已打开 ")
            }
        })
    } else {
        console.log("mongodb连接失败");
    }
})

server.on('close',function () {
    mongoose.disconnect()
})


