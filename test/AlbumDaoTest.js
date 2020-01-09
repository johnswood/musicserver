const mongoose=require('mongoose')
require('../model')
let albumDao=require('../dao/AlbumDao');
const assert=require('assert')

describe("Test AlbumDao",function () {
   before(function () {
      mongoose.connect('mongodb://39.99.190.190/demo02',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("Test AddAlbum",function (done) {
        let album ={
            album_id:1,
            album_name:"albumname",
            public_time:"public_time",
            week : 20,
            price: 34,
            cover: "http://localhost/a.jpg",
            singers: [
                {"singer_id":34,"singer_name":"Singer Name"}
            ]
        }
        albumDao.addAlbum(album,function (nb) {

            assert.ok(nb._id!=null)
            done()
        })
    })
    it('Test FindAllAlbum',function (done) {
        albumDao.findAllAlbum(function (albums) {
           assert.ok(albums.length>0)
           albums.forEach(album=>console.log(album.album_id))
           done()
       })
    })
    it("Test deleteAlbum",function (done) {
        albumDao.deleteAlbum(1,function ({}) {
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