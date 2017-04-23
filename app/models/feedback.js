// app/models/blog.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our feedback model
var feedbackSchema1 = mongoose.Schema({
	uname	: 	String,
	email	:	String,
	feedback :	String

});

// create the model for feedback and expose it to our app
module.exports = mongoose.model('Feedback1',feedbackSchema1);
