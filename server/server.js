var express = require('express');
var bodyParser = require('body-parser');
//routes
var indexRouter = require('./routes/index.js');



var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.use('/', indexRouter);


var server = app.listen(port, function(){
  var liveport = server.address().port;
  console.log('Now listening on port:', liveport + '. Press ctrl-c to end.');
});
