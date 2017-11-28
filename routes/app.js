var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	User.findOne({},function(err,doc){
		if(err){
			return res.send('Error');
		}
	res.render('message',{email: doc.email});
	})
});

//posting data and redirecting to get url.. data will be inside the requset body which v extract form body parser
router.post('/', function (req,res,next){
	var email=req.body.email;
	var user =new User({
		firstName:"swati",
		lastName: "Kiran",
		password: "admin",
		email : email
	});
	user.save();
	res.redirect('/');
});

module.exports = router;
