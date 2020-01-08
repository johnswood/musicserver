const mongoose=require('mongoose')
require('../model')
let bookDao=require('../dao/BookDao');
const assert=require('assert')

describe("测试BookDao",function () {
   before(function () {
      mongoose.connect('mongodb://39.99.190.190/demo02',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("测试添加一本书",function (done) {
        let book={name:'john',price: 200}
        bookDao.addBook(book,function (nb) {

            assert.ok(nb._id!=null)
            done()
        })
    })
    it('测试查询所书',function (done) {
       bookDao.findAllBooks(function (books) {
           assert.ok(books.length>0)
           books.forEach(book=>console.log(book._id))
           done()
       })
    })
    it("测试删除",function (done) {
        bookDao.deleteBook("5e1594778cecb30d96e13157",function ({}) {
            console.log({})
            done()
        })
    })

    // it("最大ID",function (done) {
    //     bookDao.getNewId(function (maxid) {
    //         assert.ok(maxid >=0);
    //         done()
    //     })
    // })


})