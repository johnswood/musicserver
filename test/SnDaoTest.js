const mongoose=require('mongoose')
require('../model')
let snDao=require('../dao/SnDao');
const assert=require('assert')

describe("Test SnDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/music',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    // it("Test AddSn",function (done) {
    //     let serial ={
    //         sn_name:"singer",
    //         sn:"1",
    //     }
    //     snDao.addSn(serial,function (newserial) {
    //         assert.ok(newserial._id!=null)
    //         done()
    //     })
    // })

    it("Test getNext",function (done) {
        let sn_name ="singer";
        let firstSn =0;
        let secondSn = 0;
        snDao.getNext(sn_name,function (sn) {
            firstSn = sn;
            snDao.getNext(sn_name,function (sn){
                secondSn = sn;
                console.log(firstSn);
                console.log(secondSn)
                assert.ok(secondSn == firstSn +1);
                done()
            })

        })
    })

    // it("Test findSn",function (done) {
    //     let sn_name ="singer";
    //     let firstSn =1;
    //     snDao.findSn(sn_name,function (sns) {
    //         if(sns.length > 0)
    //         assert.ok(sns[0].sn > 0)
    //         done()
    //
    //     })
    // })


})