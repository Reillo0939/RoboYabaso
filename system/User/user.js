const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = 'dream-realm-v2';
// Create a new MongoClient
const Mongoclient = new MongoClient(url);



function create_User(UserId){
	Mongoclient.connect(function(err) {
			assert.equal(null, err);
			//console.log("Connected successfully to server");
			const db = Mongoclient.db(dbName);
			var finder=db.collection('user').findOne({id:UserId},function() {
				console.log(finder);
			});
			
	});
}
module.exports = {
	create_User:create_User
};
