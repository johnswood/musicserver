var express = require('express');
var router = express.Router();
var albumDao=require('../dao/AlbumDao')
/* GET users listing. */
router.get('/', function(req, res) {
  albumDao.findAllAlbum(function (albums) {
    res.json(albums)
  })
});

router.get('/:id', function(req, res) {
    let id=req.params.id;
    albumDao.findAlbum(id, function (albums) {
        res.json(albums)
    })
});

router.post('/',function (req,res) {
    console.log("this is apost")
    let album=req.body
    console.log(album);
    albumDao.addAlbum(album,function (nb) {
      res.json(nb)
    })
})
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    albumDao.deleteAlbum(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
