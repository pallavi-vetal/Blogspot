// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
 MongoStore = require('connect-mongo')(express);
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var moment 	 = require('moment');

var configDB = require('./config/database.js');


// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration
var feedback = require('./app/models/feedback') // pass feedback for configuration
var blogs 	=	require('./app/models/blogs')
app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
	app.use(express.static(__dirname + '/views/images'));
	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({
    secret:"jskdjfkjsdkjfsuew34535n4k"
  }));
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

app.use(express.static(__dirname + '/views'));
	app.get('/submit-query',function(req,res){
		   var names = req.query.name;
		  
		   res.send(JSON.stringify(names));
		   
     
});
	
	var counter=0;
	app.get('/counter',function(req,res){
		    counter+=1;
		    res.send(counter.toString());
});
// routes ======================================================================
require('./app/routes.js')(app, passport,feedback,blogs); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
