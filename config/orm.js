var connection = require('./connection.js');

var orm = {
	selectAll: function(table, callback){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(error, result){
			if(error) {
				throw error;
			}
			callback(result);
		});
	},
	// insertOne: function(name){
	// 	var queryString = "INSERT ? WHERE ";
	// 	connection.query(queryString, [burger_name], function(error, result){
	// 		if(error) throw error;
	// 		console.log(result);
	// 	});
	// },
	// updateOne: function(){
	// 	var queryString = "SELECT * FROM burgers";
	// 	connection.query(queryString, [], function(error, result){
	// 		if(error) throw error;
	// 		console.log(result);
	// 	});
	// }
};

module.exports = orm;