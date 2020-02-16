//dao/BookDao.js v1
const mongoose=require('mongoose')


let userModel=mongoose.model("user")
function addUser(user,callback) {

    let b=  userModel.create(user,function (err,newuser) {
        if(!err) callback(newuser);

    });


}

function findAllUsers(callback) {
    userModel.find({}).exec(function (err,users) {
        if(!err) callback(users)
    })
}

function deleteUser(id,callback) {
   //bookModel.findByIdAndRemove(id,function (err) {
    userModel.remove({"user_id":id},function (err) {
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
module.exports={addUser,deleteUser,findAllUsers}
