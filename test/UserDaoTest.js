const mongoose=require('mongoose')
require('../model')
let userDao=require('../dao/UserDao');
const assert=require('assert')

describe("Test UserDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/music',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("Test Adduser",function (done) {
        let user ={
            user_id:1,
            user_name:"username",
            photo: "users/1.jpg",
            password: "password",
            real_name: "张三",
            mobile: "18612345678",
            email: "test@mycompany.com",
            role_id: "admin"
        }
        userDao.addUser(user,function (newuser) {
            assert.ok(newuser._id!=null);
            done()
        })
    })
    it('Test FindAllUsers',function (done) {
        userDao.findAllUsers(function (users) {
           assert.ok(users.length>0);
           users.forEach(user=>console.log(user.user_id));
           done()
       })
    })
    it("Test deleteUser",function (done) {
        userDao.deleteUser(1,function ({}) {
            console.log({});
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