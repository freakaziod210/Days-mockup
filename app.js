var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var itemData = require('./itemData.js');
app.use(bodyParser.json());

app.get('/items', function(req, res){
  var item = itemData.getItem();
  res.send(item);
});
app.post('/items', function(req, res) {
   var newItem = {};
    newItem.title = req.body.title;
    newItem.price= req.body.price;
    newItem.description = req.body.description;
    newItem.image= req.body.image;
    console.log(newItem);
   itemData.addItem(newItem);
   res.send(newItem);
});

app.listen(3000, function() {
    console.log('you are connected');
});