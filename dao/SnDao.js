const mongoose=require('mongoose')


let snModel=mongoose.model("sn")
// function addSn(serial,callback) {
//
//     let b=  snModel.create(serial,function (err,newserial) {
//         if(!err) callback(newserial);
//
//     });
// }
function getNext(sn_name,callback) {

    let b=  snModel.find({"sn_name": sn_name}, function (err,serials) {
        if(!err) {
            snModel.updateOne({"sn_name": sn_name},{$inc:{"sn":1}},function(err,res){
                if(!err){
                    //console.log("res=" + res.toJSON())
                    callback(serials[0].sn)

                }
            });
            //console.log(serials)
            //callback(serials.sn)

        }

    });


}
// function findSn(sn_name, callback) {
//     snModel.find({"sn_name": sn_name}).exec(function(err,sns) {
//         if(!err) {
//             callback(sns);
//         }
//     })
// }
module.exports={getNext}