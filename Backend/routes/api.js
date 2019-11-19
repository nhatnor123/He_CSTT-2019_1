var express = require("express");
var router = express.Router();
var DBConnect = require("../connect/DBConnect");

router.get("/getDataSymptomsDiagnoses",  function(req, res, next) {
	const connection = DBConnect.createConnection();
	let result = {};
	connection.query("SELECT * FROM symptoms_diagnoses", (err, results) => {
		if (err) {
			return res.json(err);
			// throw err;
		}
		return res.send(results)
	});
});

router.get("/");

module.exports = router;
