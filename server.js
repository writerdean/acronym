var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');
var organ = require('./organ.js');


app.use(middleware.logger);
app.use(organ.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on Port ' + PORT + '!');
});