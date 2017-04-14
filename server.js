var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

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



var counter=0;
app.get('/counter',function(req,res){
    counter+=1;
    res.send(counter.toString());
});
var names = [];
app.get('/submit-query',function(req,res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
   
     
});

app.get('/css/bootstrap-social.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap-social.css'));
});
app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.min.css'));
});
app.get('/css/blog.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'blog.css'));
});
app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'style.css'));
});
app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.min.js'));
});
app.get('/js/ie10-viewport-bug-workaround.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'ie10-viewport-bug-workaround.js'));
});
app.get('/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.js'));
});
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'favicon.ico'));
});
app.get('/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'madi.png'));
});
app.get('/bg1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'bg4.jpg'));
});
app.get('/bg2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'bg5.jpg'));
});
app.get('/bg3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'bg3.jpg'));
});
app.get('/bg3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'bg3.jpg'));
});
app.get('/clouds.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'clouds.jpg'));
});
app.get('/images/blog/art1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/blog', 'art1.png'));
});
app.get('/images/blog/art1_2.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/blog', 'art1_2.PNG'));
});
app.get('/images/blog/art1_3.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/blog', 'art1_3.PNG'));
});
app.get('/cat3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/cat', 'cat7.jpg'));
});
app.get('/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'main.js'));
});


app.get('/:p',function(req,res){
 var articleName=req.params.p;
 res.send(createTemplate(articles[articleName]));
});
var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
