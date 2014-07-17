var mongoose = require('mongoose');
var schema = mongoose.Schema;

var itemSchema = new schema({
    title: String,
    price: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('item', itemSchema);