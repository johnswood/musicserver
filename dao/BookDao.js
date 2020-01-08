//dao/BookDao.js v1
const mogoose=require('mongoose')

let bookModel=mogoose.model("Book")
function addBook(book,callback) {
    getNewId(function (maxid) {
        book.id = ++maxid;
        let b=  bookModel.create(book,function (err,newBookDoc) {
            if(!err) callback(newBookDoc.toObject())
        })
    })

}

function findAllBooks(callback) {
    bookModel.find({}).exec(function (err,books) {
        if(!err) callback(books)
    })
}

function deleteBook(id,callback) {
   //bookModel.findByIdAndRemove(id,function (err) {
    bookModel.remove({"id":id},function (err) {
           if(!err) callback({})
    })
}

function getNewId(callback){
    bookModel.aggregate([{$group:{_id:"max", maxid:{$max:"$id"}}}],function (err,doc) {
        if(!err){
            console.log(doc);
            if(!doc[0] && !doc[0].maxid)  callback(doc[0].maxid);
            else callback(0);
        } else {
            callback(-1);
        }
    })
}
module.exports={addBook,deleteBook,findAllBooks}
