const mongoose=require('mongoose')
require('../model')
let singerDao=require('../dao/SingerDao');
const assert=require('assert')

describe("Test SingerDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/music',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("Test AddSinger",function (done) {
        let singer ={
            singer_id:1,
            singer_name:"singername",
            area:"地区",
            birthday : "1990-1-1",
            sex: true,
            photo: "singers/1.jpg",
            comment:"Test Comment"

        }
        singerDao.addSinger(singer,function (newsinger) {
            assert.ok(newsinger._id!=null)
            done()
        })
    })
    it('Test FindAllSinger',function (done) {
        singerDao.findAllSinger(function (singers) {
           assert.ok(singers.length>0)
           singers.forEach(singer=>console.log(singer.singer_id))
           done()
       })
    })
    it("Test deleteSinger",function (done) {
        singerDao.deleteSinger(1,function ({}) {
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