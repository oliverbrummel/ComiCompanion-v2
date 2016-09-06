var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var path = require('path');//not sure if this is necessary...
var passport = require('passport');
var localStrategy = require('passport-local');
var bodyParser = require('body-parser');
//[[[[[[[[[[[[[[[[[[[ REQUIRED ROUTES ]]]]]]]]]]]]]]]]]]]
var indexRouter = require('./routes/index.js');


//[[[[[[[[[[[[[[[[ EXPRESS ]]]]]]]]]]]]]]]]
var app = express();

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//[[[[[[[[[[[[[[[[ ROUTE PATHS ]]]]]]]]]]]]]]]]
app.use('/', indexRouter);

//[[[[[[[[[[[[[[[[[[[ mongoDB ]]]]]]]]]]]]]]]]]]]
var mongoURI = 'mongodb://localhost/v2_comic_entries';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function(){
  console.log('MongoDB connection open!');
})


var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
  var liveport = server.address().port;
  console.log('Now listening on port:', liveport + '. Press ctrl-c to end.');
});
