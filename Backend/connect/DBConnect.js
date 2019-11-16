console.log("db_connect module initialized");
var mysql = require("mysql");

function createConnection() {
	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "picturefuzzy"
	});
	connection.connect(err => {
		if (err) {
			console.log("Error occurred when connecting with database ");
			return;
		}
		console.log("Connection with database was established successfullly");
	});
}
exports.createConnection = createConnection;
