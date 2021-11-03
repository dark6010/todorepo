var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var todoSchema = new Schema({
	'title' : String,
	'description' : String,
	'date' : Date,
	'state' : Boolean
});

module.exports = mongoose.model('todo', todoSchema);
