//dao/BookDao.js v1
const mongoose=require('mongoose')


let userModel=mongoose.model("user")
function addUser(user,callback) {
    let snDao = require('../dao/SnDao');
    snDao.getNext("user",function (id) {
        user.user_id = id;
        user.photo = "/userpic/default.jpg"
        let b=  userModel.create(user,function (err,newuser) {
            if(!err) callback(newuser);
        });
    })

}

function updateUser(user,callback) {
    // let content={};
    // for (let item in user){
    //     if(item != "_id") {
    //         content[item] = user[item]
    //     }
    //
    // }

    let b=  userModel.update({ "user_id": user.user_id },user, { multi: true }, function (err, raw) {
        if (! err) {
            callback(raw)
        }
        //console.log('The raw response from Mongo was ', raw);
    });
}

function findAllUsers(name, callback) {
    if(name){
        userModel.find({$text:{$search: name}},{"_id":0}).exec(function (err,users) {
            if(!err) callback(users)
        })
    } else {
        userModel.find({},{"_id":0}).exec(function (err,users) {
            if(!err) callback(users)
        })
    }
}

function findUser(id, callback) {
    if(id){
        userModel.find({"user_id": id},{"_id":0}).exec(function (err,users) {
            if(!err) callback(users)
        })
    } else {
        userModel.find({},{"_id":0}).exec(function (err,users) {
            if(!err) callback(users)
        })
    }

}

function login(username,password,callback){
    userModel.find({"user_name":username, "password": password},function(err,users){
        if(!err) {
            if(users.length>0){
                callback(users[0]);
            } else {
                callback({});
            }

        }
    })
}

function deleteUser(id,callback) {
   //bookModel.findByIdAndRemove(id,function (err) {
    userModel.remove({"user_id":id},function (err) {
           if(!err) callback({})
    })
}

function updatePhotoPath(id, newpath, callback) {
    let b=  userModel.update({ "user_id": id },{$set:{"photo": newpath}}, { multi: true }, function (err, res) {
        if (! err) {
            callback(res)
        }
        console.log('The raw response from Mongo was ', res);
    });
}
module.exports={addUser,deleteUser,findAllUsers,findUser,updateUser,updatePhotoPath,login}
