//dao/BookDao.js v1
const mongoose=require('mongoose')


let singerModel=mongoose.model("singer")
function addSinger(singer,callback) {
    let snDao = require('../dao/SnDao');
    snDao.getNext("singer",function (id) {
        singer.singer_id = id;
        singer.photo = "/singer/default.jpg";
        let b=  singerModel.create(singer,function (err,newsinger) {
            if(!err) callback(newsinger);
        });
    })


}

function updateSinger(singer,callback) {
    let content={};
    content.singer_name = singer.singer_name;
    content.birthday = singer.birthday;
    content.area = singer.area;
    content.comment = singer.comment;

    let b=  singerModel.update({ "singer_id": singer.singer_id },content, { multi: true }, function (err, raw) {
        if (! err) {
            callback(raw)
        }
        console.log('The raw response from Mongo was ', raw);
    });
}

function updatePhotoPath(id, newpath, callback) {
    let b=  singerModel.update({ "singer_id": id },{$set:{"photo": newpath}}, { multi: true }, function (err, res) {
        if (! err) {
            callback(res)
        }
        console.log('The raw response from Mongo was ', res);
    });
}

function findAllSinger(callback) {
    singerModel.find({},{"_id":0}).exec(function (err,singers) {
        if(!err) callback(singers)
    })
}

function findSinger(id,callback) {
    if(id){
        //console.log("Dao id="+id);
        singerModel.find({"singer_id": id}).exec(function (err,singers) {
            if(!err) callback(singers)
        })
    } else{
        singerModel.find({}).exec(function (err,singers) {
            if(!err) callback(singers)
        })
    }
}

function deleteSinger(id,callback) {
   //bookModel.findByIdAndRemove(id,function (err) {
    singerModel.remove({"singer_id":id},function (err) {
           if(!err) callback({})
    })
}
//
// function getNewId(callback){
//     bookModel.aggregate([{$group:{_id:"max", maxid:{$max:"$id"}}}],function (err,doc) {
//         if(!err){
//             console.log(doc.length);
//             if(doc.length > 0)  callback(doc[0].maxid);
//             else callback(0);
//         } else {
//             callback(-1);
//         }
//     })
// }
module.exports={addSinger,deleteSinger,findAllSinger,findSinger, updateSinger,updatePhotoPath}
