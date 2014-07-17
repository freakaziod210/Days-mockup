var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/daysData');

var itemData = require('./itemData.js');

app.use(bodyParser.json());

app.get('/items', itemData.get);

app.post('/items', itemData.post);

app.listen(3000, function() {
    console.log('You are connected!');
});