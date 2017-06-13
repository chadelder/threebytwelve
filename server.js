var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 8080));

//Handle route for mongo Schema
Test = require('./models/test');

app.use(express.static('public'));
app.use(bodyParser.json());

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/threebytwelve');
var db = mongoose.connection;

// Get Posts
app.get('/api/testget', function(req, res) {
  Test.getTest(function(err, test) {
    if(err) {
      throw err;
    }
    res.json(test);
  });
});

// Post data
app.post('/api/testpost', function(req, res){
	var test = req.body;
	Test.postTest(test, function(err, test){
		if(err){
			throw err;
		}
    console.log(test)
		res.json(test);
	});
});

app.listen(app.get('port'), function() {
console.log('Running on port 8080...WEIRDO', app.get('port'));
});
