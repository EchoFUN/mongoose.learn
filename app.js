var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/yymg');

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('open', mongoHandler);

function mongoHandler() { 
	var kittySchema = mongoose.Schema({
		name : String
	});

	kittySchema.methods.speak = function() {
		var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
		console.log(greeting);
	}
	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({
		name : 'Silence'
	});
	silence.speak();
}
