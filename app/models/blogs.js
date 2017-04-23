// app/models/blog.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our feedback model
var blogSchema = mongoose.Schema({
	title	: 	String,
	description	:	String,
	time : { type : Date, default: Date.now },
	details : String  

});

// create the model for blogs and expose it to our app
module.exports = mongoose.model('blogs',blogSchema);
