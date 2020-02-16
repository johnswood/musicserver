var express = require('express');
var router = express.Router();
var singerDao=require('../dao/SingerDao')
/* GET users listing. */
router.get('/', function(req, res) {
    let name = req.query.name;
    singerDao.findAllSinger(name, function (singers) {
        res.json(singers)
    })
});
router.get('/query', function(req, res) {
    let name = req.query.name;
    singerDao.findAllSinger2(name, function (singers) {
        res.json(singers)
    })
});

router.get('/:id', function(req, res) {
    let id=req.params.id;
    //console.log("id="+id);
    singerDao.findSinger(id, function (singers) {
        res.json(singers)
    })
});

router.post('/',function (req,res) {
    //console.log("this is apost")
    let singer=req.body
    console.log(singer);
    singerDao.addSinger(singer,function (nb) {
      res.json(nb)
    })
})

router.put('/',function (req,res) {
    console.log("this is a put")
    let singer=req.body
    console.log(singer);
    singerDao.updateSinger(singer,function (nb) {
        res.json(nb)
    })
})

router.delete('/:id',function (req,res) {
    let id=req.params.id;
    singerDao.deleteSinger(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
