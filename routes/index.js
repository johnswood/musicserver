var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login",function(req,res,next){
  let user = req.body;
  let userDao = require('../dao/UserDao')
  console.log("%s,%s",user.username,user.password)
  userDao.login(user.username, user.password,function(user){
    res.json(user);
  })

})

module.exports = router;
