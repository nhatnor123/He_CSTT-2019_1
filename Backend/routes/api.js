var express = require("express");
var router = express.Router();
var DBConnect = require("../connect/DBConnect");

let { chuanHoaData } = require("../controllers/chuanHoa");

var { patientData, diagnoses_symptoms, paramaterData } = require("./fakeData");

// let {
// 	selectDataSymptomsDiagnosesRelation,
// 	insertDataSymptomsDiagnosesRelation
// } = require("../connect/getData");

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

		let x = -10,
			y = 10,
			z = 10;
		for (symptom in patientData) {
			x = Math.max(tempData[symptom]["x"], x);
			y = Math.min(tempData[symptom]["y"], y);
			z = Math.min(tempData[symptom]["z"], z);
		}
		console.log({ x, y, z });

		fuzzyValueOfEachDiagnose[diagnose] = { x, y, z };
	}
	console.log(fuzzyValueOfEachDiagnose);
	return res.json(fuzzyValueOfEachDiagnose);
});

router.post("/getFuzzyDiagnoseValueFromPFSPatientData", (req, res, next) => {
	let fuzzyValueOfEachDiagnose = {};
	let patientData = req.body.dataLevelOfSymptom;

	for (diagnose in diagnoses_symptoms) {
		let tempData = [];
		for (symptom in patientData) {
			// console.log(
			// 	symptom +
			// 		" : " +
			// 		patientData[symptom]["x"]["type"] +
			// 		" : " +
			// 		patientData[symptom]["x"]["value"]
			// );
			// console.log(
			// 	patientData[symptom]["x"]["type"] === "language"
			// 		? paramaterData.cacDoanNgonNgu[
			// 				patientData[symptom]["x"]["value"]
			// 		  ][1]
			// 		: parseFloat(patientData[symptom]["x"]["value"]) / 100
			// );
			// console.log( paramaterData.cacDoanNgonNgu[patientData[symptom]["x"]["value"]][1])
			// console.log(parseFloat(patientData[symptom]["x"]["value"]) / 100)

			tempData[symptom] = {
				x: Math.min(
					diagnoses_symptoms[diagnose][symptom]["x"],
					patientData[symptom]["x"]["type"] === "language"
						? (paramaterData.cacDoanNgonNgu[
								patientData[symptom]["x"]["value"]
						  ][0] +
								paramaterData.cacDoanNgonNgu[
									patientData[symptom]["x"]["value"]
								][1]) /
								2
						: parseFloat(patientData[symptom]["x"]["value"]) / 100
				),
				y: Math.min(
					diagnoses_symptoms[diagnose][symptom]["y"],
					patientData[symptom]["y"]["type"] === "language"
						? (paramaterData.cacDoanNgonNgu[
								patientData[symptom]["y"]["value"]
						  ][0] +
								paramaterData.cacDoanNgonNgu[
									patientData[symptom]["y"]["value"]
								][1]) /
								2
						: parseFloat(patientData[symptom]["y"]["value"]) / 100
				),
				z: Math.max(
					diagnoses_symptoms[diagnose][symptom]["z"],
					patientData[symptom]["z"]["type"] === "language"
						? (paramaterData.cacDoanNgonNgu[
								patientData[symptom]["z"]["value"]
						  ][0] +
								paramaterData.cacDoanNgonNgu[
									patientData[symptom]["z"]["value"]
								][1]) /
								2
						: parseFloat(patientData[symptom]["z"]["value"]) / 100
				)
			};
			// console.log(tempData);
		}

		let x = -10,
			y = 10,
			z = 10;
		for (symptom in patientData) {
			x = Math.max(tempData[symptom]["x"], x);
			y = Math.min(tempData[symptom]["y"], y);
			z = Math.min(tempData[symptom]["z"], z);
		}
		// console.log({ x, y, z });

		fuzzyValueOfEachDiagnose[diagnose] = x - z * (1 - (x + y + z));
	}
	// console.log(fuzzyValueOfEachDiagnose);
	return res.json(fuzzyValueOfEachDiagnose);
});

router.post(
	"/getFuzzyDiagnoseValueFromPFSPatientDataDuocChuanHoa",
	(req, res, next) => {
		let fuzzyValueOfEachDiagnose = {};
		let patientData = chuanHoaData(req.body.dataLevelOfSymptom);

		for (diagnose in diagnoses_symptoms) {
			let tempData = [];
			for (symptom in patientData) {
				// console.log(
				// 	symptom +
				// 		" : " +
				// 		patientData[symptom]["x"]["type"] +
				// 		" : " +
				// 		patientData[symptom]["x"]["value"]
				// );
				// console.log(
				// 	patientData[symptom]["x"]["type"] === "language"
				// 		? paramaterData.cacDoanNgonNgu[
				// 				patientData[symptom]["x"]["value"]
				// 		  ][1]
				// 		: parseFloat(patientData[symptom]["x"]["value"]) / 100
				// );
				// console.log( paramaterData.cacDoanNgonNgu[patientData[symptom]["x"]["value"]][1])
				// console.log(parseFloat(patientData[symptom]["x"]["value"]) / 100)

				tempData[symptom] = {
					x: Math.min(
						diagnoses_symptoms[diagnose][symptom]["x"],
						patientData[symptom]["x"]["type"] === "language"
							? (paramaterData.cacDoanNgonNgu[
									patientData[symptom]["x"]["value"]
							  ][0] +
									paramaterData.cacDoanNgonNgu[
										patientData[symptom]["x"]["value"]
									][1]) /
									2
							: parseFloat(patientData[symptom]["x"]["value"]) /
									100
					),
					y: Math.min(
						diagnoses_symptoms[diagnose][symptom]["y"],
						patientData[symptom]["y"]["type"] === "language"
							? (paramaterData.cacDoanNgonNgu[
									patientData[symptom]["y"]["value"]
							  ][0] +
									paramaterData.cacDoanNgonNgu[
										patientData[symptom]["y"]["value"]
									][1]) /
									2
							: parseFloat(patientData[symptom]["y"]["value"]) /
									100
					),
					z: Math.max(
						diagnoses_symptoms[diagnose][symptom]["z"],
						patientData[symptom]["z"]["type"] === "language"
							? (paramaterData.cacDoanNgonNgu[
									patientData[symptom]["z"]["value"]
							  ][0] +
									paramaterData.cacDoanNgonNgu[
										patientData[symptom]["z"]["value"]
									][1]) /
									2
							: parseFloat(patientData[symptom]["z"]["value"]) /
									100
					)
				};
				// console.log(tempData);
			}

			let x = -10,
				y = 10,
				z = 10;
			for (symptom in patientData) {
				x = Math.max(tempData[symptom]["x"], x);
				y = Math.min(tempData[symptom]["y"], y);
				z = Math.min(tempData[symptom]["z"], z);
			}
			// console.log({ x, y, z });

			fuzzyValueOfEachDiagnose[diagnose] = x - z * (1 - (x + y + z));
		}
		// console.log(fuzzyValueOfEachDiagnose);
		return res.json(fuzzyValueOfEachDiagnose);
	}
);

router.get("/selectDataSymptomsDiagnosesRelation", (req, res, next) => {
	const connection = DBConnect.createConnection();
	let result = {};
	connection.query(
		"SELECT * FROM symptoms_diagnoses_relation",
		(err, results) => {
			if (err) {
				return res.json(err);
				// throw err;
			}
			return res.send(results);
		}
	);
});

module.exports = router;
