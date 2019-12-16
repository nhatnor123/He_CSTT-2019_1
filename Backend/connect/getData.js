var DBConnect = require("../connect/DBConnect");
const connection = DBConnect.createConnection();

// const {
// 	patientData,
// 	symptoms_diagnoses,
// 	diagnoses_symptoms,
// 	paramaterData
// } = require("../routes/fakeData");

let insertDataSymptomsDiagnosesRelation = diagnoses_symptoms => {
	let stringQueryInsert_symptoms_diagnoses_relation = [];

	for (key in diagnoses_symptoms) {
		console.log(key);
		console.log(diagnoses_symptoms[key]);
		let queryString =
			"INSERT INTO symptoms_diagnoses_relation (diagnose, temperature_x, temperature_y, temperature_z, headache_x,	headache_y,	headache_z,	stomachache_x	,stomachache_y,	stomachache_z,	cough_x,	cough_y	,cough_z,	chest_pain_x,	chest_pain_y,	chest_pain_z,	bloating_x,	bloating_y,	bloating_z,	diarrhea_x,	diarrhea_y,	diarrhea_z,	fatigue_x,	fatigue_y,	fatigue_z,	nausea_x,	nausea_y,	nausea_z,	dizziness_x,	dizziness_y,	dizziness_z) VALUES ('" +
			key +
			"', '" +
			diagnoses_symptoms[key]["temperature"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["temperature"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["temperature"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["headache"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["headache"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["headache"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["stomachache"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["stomachache"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["stomachache"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["cough"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["cough"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["cough"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["chest_pain"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["chest_pain"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["chest_pain"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["bloating"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["bloating"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["bloating"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["diarrhea"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["diarrhea"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["diarrhea"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["fatigue"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["fatigue"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["fatigue"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["nausea"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["nausea"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["nausea"]["z"] +
			"', '" +
			diagnoses_symptoms[key]["dizziness"]["x"] +
			"', '" +
			diagnoses_symptoms[key]["dizziness"]["y"] +
			"', '" +
			diagnoses_symptoms[key]["dizziness"]["z"] +
			"')";
		console.log(queryString);
		stringQueryInsert_symptoms_diagnoses_relation.push(queryString);
	}

	for (
		let index = 0;
		index < stringQueryInsert_symptoms_diagnoses_relation.length;
		index++
	) {
		connection.query(
			stringQueryInsert_symptoms_diagnoses_relation[index],
			(err, results) => {
				if (err) {
					console.log(err);
					// throw err;
				} else {
					console.log(results);
				}
			}
		);
	}
};

let selectDataSymptomsDiagnosesRelation = () => {
	let responseResult;
	connection.query(
		"SELECT * FROM symptoms_diagnoses_relation",
		(err, results) => {
			if (err) {
				console.log(err);
				// throw err;
			} else {
				
                responseResult = results;
                console.log(responseResult)
				return results;
			}
		}
	);
};

exports.selectDataSymptomsDiagnosesRelation = selectDataSymptomsDiagnosesRelation;
exports.insertDataSymptomsDiagnosesRelation = insertDataSymptomsDiagnosesRelation;
