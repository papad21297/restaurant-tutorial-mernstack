const mongoose = require('mongoose');

const connect_db = async () => { try {
	await mongoose.connect(
		''
		+ 'mongodb+srv://restaurant-user:testing123@restaurant-tutorial-mer.'
		+ 'kpowmll.mongodb.net/?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true });
	console.log("Database connection success");
} catch (err) { console.log(err); } }

module.exports = connect_db;