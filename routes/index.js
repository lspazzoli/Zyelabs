var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//var urlStudent = "mongodb://localhost:27017/student";
var urlStudent = "mongodb://test:test@ds213118.mlab.com:13118/heroku_kvr7qz3f"
var info="";

router.get('/', function(req, res){
	getData(res) ;
  
});

router.get('/admin', function(req, res){
  res.render('admin', {
    title: 'Admin',
	info :0
  });
});
router.get('/info', function(req, res){
  res.render('index', {
    title: 'Info'
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
							if(doc.wrote_2016!="")
							{tot16W+=parseInt(doc.wrote_2016);
							tot16R+=parseInt(doc.passed_2016);}					
						}
						else
						{
							info=tot16W+" students wrote and "+tot16R+" students passed , an average of "+parseInt(tot16R/tot16W*100)+"% passed";	
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