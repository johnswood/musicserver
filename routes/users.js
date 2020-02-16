var express = require('express');
var router = express.Router();
var userDao=require('../dao/UserDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  let name = req.query.name;
  userDao.findAllUsers(name,function (users) {
    res.json(users)
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  userDao.findUser(id,function (users) {
    res.json(users)
  })
});

router.post('/',function (req,res) {
  console.log("this is apost")
  let user=req.body
  console.log(user);
  userDao.addUser(user,function (nb) {
    res.json(nb)
  })
})

router.put('/',function (req,res) {
  let user=req.body
  console.log(user);
  userDao.updateUser(user,function (nb) {
    res.json(nb)
  })
})

router.delete('/:id',function (req,res) {
  let id=req.params.id;
  userDao.deleteUser(id,function (obj) {
    res.json(obj)
  })
})

module.exports = router;
