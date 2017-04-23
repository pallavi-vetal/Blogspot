// app/routes.js
module.exports = function(app, passport,feedback,blogs) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs', {message: req.flash('feedback-msg')}); // load the index.ejs file
	});
	app.get('/#about', function(req, res) {
		res.render('index.ejs', {message: req.flash('feedback-msg')}); // load the index.ejs file
	});
	app.get('/profile#blog-main', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('/#blog-main', { message: req.flash('blog-post-msg'),blogs : req.blogs  });
	});
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn,function(req, res) {
		res.render('profile.ejs', {user : req.user,message: req.flash('blog-post-msg') });
	});
	app.get('/blogs', isLoggedIn, function(req, res) {
		//blogs.find();
		blogs.find({})
        .sort({'date': -1})
        .exec(function(err, blogs) {
        if (err)
            res.send(err);

        // Events is an array of event models, so this is setting properties on an array
        // It also doesn't look like you are using it in your view so its not needed
        //events.name = req.body.name;
        //events.title = req.body.title;
        //events.company = req.body.company;
        //events.url = req.body.url;
        //events.upcomingEvent = req.body.upcomingEvent;


        // The events local in your page will be an array with index[0] being the most recent event, which I believe is your 'UPCOMING SPEAKER'. You can then loop over the rest of the array from 1.
        res.render('blogs.ejs', {
            blogs : blogs
        });
    });
		
	});
	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	app.post('/feedback', function (req, res, next) {
  		var post = new feedback({
	    uname: req.body.feedback_name,
	    email: req.body.feedback_email,
	    feedback:req.body.feedback_d

	  })
	  post.save(function (err, post) {
		    if (err) { return next(err) }
		    req.flash('feedback-msg','Feedback Submitted Successfully !!!');
			res.redirect('/#about');
	  })
	});


	app.post('/blogs_post', function (req, res, next) {
  		var post = new blogs({
	    title: req.body.blog_title,
	    description: req.body.blog_desc,
	    details:req.body.blog_details

	  })
	  post.save(function (err, post) {
		    if (err) { return next(err) }
		    req.flash('blog-post-msg','Blog Submitted Successfully !!!');
			res.redirect('/profile#all-blogs');
	  })
	});


	app.get('/:p',function(req,res){
		 var articleName=req.params.p;
		 res.send(createTemplate(articles[articleName]));
	});
	

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
		
		return next();
	}

	// if they aren't redirect them to the home page
	res.redirect('/');
}

var articles = {
		'article-one' : {
			title:'Article One',
			heading:'Article One',
			date:'March 21, 1996',
			contents:`
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`},
		'article-three' : {
			title:'Article Three',
			heading:'Article Three',
			date:'Jan 31, 2017',
			contents:`
					<p>
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					
					<p>
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`},
		'article-two': {
			title:'Article Two',
			heading:'Article Two',
			date:'May 29, 1991',
			contents:`
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`}					
};
function createTemplate(data)
{
			var title = data.title;
			var heading = data.heading;
			var date = data.date;
			var contents = data.contents;
			var htmlTemplate = `
					<!DOCTYPE html>
					<html>
					<head>
                    	  <title>${title}</title>
                           <!-- Bootstrap -->
                         	<!-- Latest compiled and minified CSS -->
                    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                    		
                    		<!-- jQuery library -->
                    		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                    		<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
                            
                    		<link rel="stylesheet" type="text/css" href="ui/style.css">
                    	
						<title>${title}</title>
						<!-- Latest compiled and minified CSS -->
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

						<!-- jQuery library -->
						<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

						
					</head>
					<body>
					<div class="parallax">
                	      <div class="container">
                	      	<nav class="navbar navbar-inverse  w3-animate-top" role="navigation">
                	      
                		      	 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                			        <span class="icon-bar"></span>
                			        <span class="icon-bar"></span>
                			        <span class="icon-bar"></span>                        
                			      </button>
                		      	  <div class="navbar-header">
                		      		<a href="#" class="navbar-brand"><strong></strong></a>
                		      	  </div>
                		      	  <div class="collapse navbar-collapse" id="myNavbar">
                		      		<ul class="nav navbar-nav">
                				       <li><a href="/" class="w3-hover-blue">Home</a></li>
                                     
                				      <li class="dropdown w3-hover-green">
                						  <a class="dropdown-toggle" id="menu1" data-toggle="dropdown">Quick Links  
                						  <span class="caret"></span></a>
                						  <ul class="dropdown-menu " role="menu" aria-labelledby="menu1">
                						    <li role="presentation" ><a role="menuitem" href="article-one">Article-One</a></li>
                						    <li role="presentation"><a role="menuitem" href="article-two">Aritcle-Two</a></li>
                						    <li role="presentation" ><a role="menuitem" href="article-three">Article-Three</a></li>
                						    <li role="presentation" ></li>
                						    <li role="presentation"><a role="menuitem" href="#">About Us</a></li>
                						  </ul>
                						</li>
                				     
                				      <li class="w3-hover-blue active"><a href="#">${heading}</a></li>
                				      <li class="w3-hover-red"><a>${date}</a></li>
                				     
                				    </ul>	
                				     <ul class="nav navbar-nav navbar-right">
                                              <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                            
                                    </ul>
                                        <form class="navbar-form navbar-left">
                                              <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Search">
                                              </div>
                                              <button type="submit" class="btn btn-default">Submit</button>
                                        </form>
                                </div>	
                		  	
                	      	</nav>
                	      </div>
                     
						<div class="container">
							<div class="jumbotron w3-animate-zoom">
								${contents}
							</div>
						</div>
						<!-- Latest compiled JavaScript -->
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                        <style type="text/css">
                	.dropdown:hover .dropdown-menu{
                		display: block;
                		background: gray;	

		
                    	}
                    </style>    
                    </body>
					</html>
			`;
	return htmlTemplate;
}

