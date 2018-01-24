
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var urlStudent = "mongodb://localhost:27017/student";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//EMIS , CenterNo ,w2014,r2014,w2015,r2015,w2016 r2016
//demo data db.data.insert( { EMIS: "card" , CenterNo: "card" ,w2014: "card",r2014: 5,w2015: 5,r2015: 5,w2016: 5, r2016: 5 } )

/*CODE FOR ADD 
MongoClient.connect(urlStudent, function(err, db) {
			db.collection( 'data' ).update (
					{ 'email' : email },{ $set : { "bar": barin, recID: recID } },
					function( err, result ) { if ( err ) throw err;});
			db.close();	});*/
			
			
/*CODE FOR GET
MongoClient.connect(urlStudent, function(err, db) 
			{
				var results=db.collection("data").find();
				
				results.each( function(err, doc)
					{
						 if(doc != null)
						{
							bardata=bardata+doc.name+";";							
						}
						else
						{
							dataReceived(sock,bardata);	
						}
					}
				);		
			db.close();
			});	*/