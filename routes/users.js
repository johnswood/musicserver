var express = require('express');
var router = express.Router();
var userDao=require('../dao/UserDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  userDao.findAllUsers(function (users) {
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
router.delete('/:id',function (req,res) {
  let id=req.params.id;
  userDao.deleteUser(id,function (obj) {
    res.json(obj)
  })
})

module.exports = router;
