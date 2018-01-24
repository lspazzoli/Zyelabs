var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var urlStudent = "mongodb://localhost:27017/student";

var info="";

router.get('/', function(req, res){
	getData(res) ;
  
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;

function getData(res) 
{var tot16R=0;var tot16W=0;
	MongoClient.connect(urlStudent, function(err, db) 
			{
				var results=db.collection("data").find();
				
				results.each( function(err, doc)
					{
						 if(doc != null)
						{
							tot16W+=doc.w2016
							tot16R+=doc.r2016;					
						}
						else
						{
							info=tot16W+" students wrote and "+tot16R+" students passed , an average of "+(tot16R/tot16W*100)+"% passed";	
							res.render('index', {
								title: 'Home',
								info: info
							  });
						}
					}
				);		
			db.close();
			});
	
	
}