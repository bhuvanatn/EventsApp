var express = require('express');
var path = require('path');
var events = require('./eventController');
var app = express();

var rootPath = path.normalize(__dirname + '/../');
console.log("I am rootPath:"+rootPath);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(2505);
console.log('Listening on port ' + 2505 + '...');
console.log("Soo sweet I am server..");
console.log("I am rootPath:"+rootPath);
