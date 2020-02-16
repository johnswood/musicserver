//dao/BookDao.js v1
const mongoose=require('mongoose')


let albumModel=mongoose.model("album")
function addAlbum(album,callback) {

    let b=  albumModel.create(album,function (err,newalbum) {
        if(!err) callback(newalbum);

    });


}


function findAllAlbum(callback) {
    albumModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function findAlbum(id, callback) {
    if(id) {
        albumModel.find({"album_id": id}).exec(function (err,albums) {
            if(!err) callback(albums)
        })
    } else {
        albumModel.find({}).exec(function (err,albums) {
            if(!err) callback(albums)
        })
    }

}

function updatePhotoPath(id, newpath, callback) {
    let b=  albumModel.update({ "album_id": id },{$set:{"coverpic": newpath}}, { multi: true }, function (err, res) {
        if (! err) {
            callback(res)
        }
        //console.log('The raw response from Mongo was ', res);
    });
}

function deleteAlbum(id,callback) {
   //bookModel.findByIdAndRemove(id,function (err) {
    albumModel.remove({"album_id":id},function (err) {
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
module.exports={addAlbum,deleteAlbum,findAllAlbum,findAlbum,updatePhotoPath}
