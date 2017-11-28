var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index');
});

//SIMPLE GET EXAMPLE PASSING MSG
// router.get('/message', function (req, res, next) {
//     res.render('message',{msg:'hey'});
// });

//passing params fetching data from request parameters, render takes to the page
router.get('/message/:data', function (req, res, next) {
	res.render('message',{msg:req.params.data});
});

//posting data and redirecting to get url.. data will be inside the requset body which v extract form body parser
router.post('/message', function (req,res,next){
	var message=req.body.data;
	res.redirect('/message/'+message);
})
module.exports = router;
