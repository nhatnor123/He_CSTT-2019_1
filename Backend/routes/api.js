var express = require("express");
var router = express.Router();
var DBConnect = require("../connect/DBConnect");

var {
	patientData,
	symptoms_diagnoses,
	diagnoses_symptoms
} = require("./fakeData");

router.get("/", (req, res, next) => {
	return res.send("/api ");
});

router.get("/getDataSymptomsDiagnosesFromDB", function(req, res, next) {
	const connection = DBConnect.createConnection();
	let result = {};
	connection.query("SELECT * FROM symptoms_diagnoses", (err, results) => {
		if (err) {
			return res.json(err);
			// throw err;
		}
		return res.send(results);
	});
});

router.get("/getPFSDiagnoseValueFromPFSPatientData", (req, res, next) => {
	let fuzzyValueOfEachDiagnose = {};

	for (diagnose in diagnoses_symptoms) {
		let tempData = [];
		for (symptom in patientData) {
			tempData[symptom] = {
				x: Math.min(
					diagnoses_symptoms[diagnose][symptom]["x"],
					patientData[symptom]["x"]
				),
				y: Math.min(
					diagnoses_symptoms[diagnose][symptom]["y"],
					patientData[symptom]["y"]
				),
				z: Math.max(
					diagnoses_symptoms[diagnose][symptom]["z"],
					patientData[symptom]["z"]
				)
			};
		}
		// console.log(tempData);
		let x = -10,
			y = 10,
			z = 10;
		for (symptom in patientData) {
			x = Math.max(tempData[symptom]["x"], x);
			y = Math.min(tempData[symptom]["y"], y);
			z = Math.min(tempData[symptom]["z"], z);
		}
		console.log({ x, y, z });
		// break;
		fuzzyValueOfEachDiagnose[diagnose] = { x, y, z };
	}
	console.log(fuzzyValueOfEachDiagnose);
	return res.json(fuzzyValueOfEachDiagnose);
});

router.get("/getFuzzyDiagnoseValueFromPFSPatientData", (req, res, next) => {
	let fuzzyValueOfEachDiagnose = {};

	for (diagnose in diagnoses_symptoms) {
		let tempData = [];
		for (symptom in patientData) {
			tempData[symptom] = {
				x: Math.min(
					diagnoses_symptoms[diagnose][symptom]["x"],
					patientData[symptom]["x"]
				),
				y: Math.min(
					diagnoses_symptoms[diagnose][symptom]["y"],
					patientData[symptom]["y"]
				),
				z: Math.max(
					diagnoses_symptoms[diagnose][symptom]["z"],
					patientData[symptom]["z"]
				)
			};
		}
		// console.log(tempData);
		let x = -10,
			y = 10,
			z = 10;
		for (symptom in patientData) {
			x = Math.max(tempData[symptom]["x"], x);
			y = Math.min(tempData[symptom]["y"], y);
			z = Math.min(tempData[symptom]["z"], z);
		}
		console.log({ x, y, z });
		// break;
		fuzzyValueOfEachDiagnose[diagnose] = { x, y, z };
	}
	console.log(fuzzyValueOfEachDiagnose);
	return res.json(fuzzyValueOfEachDiagnose);
});

module.exports = router;
