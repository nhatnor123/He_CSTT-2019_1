let patientData = {
	temperature: { x: 0.8, y: 0.03, z: 0.1 },
	headache: { x: 0.7, y: 0.05, z: 0.2 },
	stomachache: { x: 0.1, y: 0.2, z: 0.6 },
	cough: { x: 0.7, y: 0.15, z: 0.1 },
	chest_pain: { x: 0.2, y: 0.3, z: 0.5 }
};

let diagnoses_symptoms = {
	fever: {
		temperature: { x: 0.4, y: 0.4, z: 0.05 },
		headache: { x: 0.4, y: 0.25, z: 0.3 },
		stomachache: { x: 0.1, y: 0.25, z: 0.6 },
		cough: { x: 0.45, y: 0.2, z: 0.1 },
		chest_pain: { x: 0.05, y: 0.25, z: 0.6 }
	},
	malaria: {
		temperature: { x: 0.8, y: 0.1, z: 0.1 },
		headache: { x: 0.1, y: 0.2, z: 0.6 },
		stomachache: { x: 0.01, y: 0.03, z: 0.9 },
		cough: { x: 0.65, y: 0.5, z: 0.05 },
		chest_pain: { x: 0.03, y: 0.07, z: 0.8 }
	},
	typhoid: {
		temperature: { x: 0.3, y: 0.3, z: 0.3 },
		headache: { x: 0.75, y: 0.05, z: 0.03 },
		stomachache: { x: 0.1, y: 0.2, z: 0.7 },
		cough: { x: 0.2, y: 0.15, z: 0.6 },
		chest_pain: { x: 0.01, y: 0.01, z: 0.85 }
	},
	stomach: {
		temperature: { x: 0.15, y: 0.05, z: 0.6 },
		headache: { x: 0.3, y: 0.05, z: 0.05 },
		stomachache: { x: 0.8, y: 0.1, z: 0.01 },
		cough: { x: 0.25, y: 0.25, z: 0.5 },
		chest_pain: { x: 0.1, y: 0.1, z: 0.7 }
	},
	chest_problem: {
		temperature: {
			x: 0.05,
			y: 0.15,
			z: 0.7
		},
		headache: {
			x: 0.01,
			y: 0.1,
			z: 0.8
		},
		stomachache: {
			x: 0.1,
			y: 0.15,
			z: 0.75
		},
		cough: {
			x: 0.15,
			y: 0.2,
			z: 0.7
		},
		chest_pain: {
			x: 0.9,
			y: 0.02,
			z: 0.05
		}
	}
};

let symptoms_diagnoses = {
	temperature: {
		PFS_FromSymptomToDiagnoses: [
			{ fever: { x: 0.4, y: 0.4, z: 0.05 } },
			{ malaria: { x: 0.8, y: 0.1, z: 0.1 } },
			{ typhoid: { x: 0.3, y: 0.3, z: 0.3 } },
			{ stomach: { x: 0.15, y: 0.05, z: 0.6 } },
			{
				chest_problem: {
					x: 0.05,
					y: 0.15,
					z: 0.7
				}
			}
		]
	},
	headache: {
		PFS_FromSymptomToDiagnoses: [
			{ fever: { x: 0.4, y: 0.25, z: 0.3 } },
			{ malaria: { x: 0.1, y: 0.2, z: 0.6 } },
			{ typhoid: { x: 0.75, y: 0.05, z: 0.03 } },
			{ stomach: { x: 0.3, y: 0.05, z: 0.05 } },
			{
				chest_problem: {
					x: 0.01,
					y: 0.1,
					z: 0.8
				}
			}
		]
	},
	stomachache: {
		PFS_FromSymptomToDiagnoses: [
			{ fever: { x: 0.1, y: 0.25, z: 0.6 } },
			{ malaria: { x: 0.01, y: 0.03, z: 0.9 } },
			{ typhoid: { x: 0.1, y: 0.2, z: 0.7 } },
			{ stomach: { x: 0.8, y: 0.1, z: 0.01 } },
			{
				chest_problem: {
					x: 0.1,
					y: 0.15,
					z: 0.75
				}
			}
		]
	},
	cough: {
		PFS_FromSymptomToDiagnoses: [
			{ fever: { x: 0.45, y: 0.2, z: 0.1 } },
			{ malaria: { x: 0.65, y: 0.5, z: 0.05 } },
			{ typhoid: { x: 0.2, y: 0.15, z: 0.6 } },
			{ stomach: { x: 0.25, y: 0.25, z: 0.5 } },
			{
				chest_problem: {
					x: 0.15,
					y: 0.2,
					z: 0.7
				}
			}
		]
	},
	chest_pain: {
		PFS_FromSymptomToDiagnoses: [
			{ fever: { x: 0.05, y: 0.25, z: 0.6 } },
			{ malaria: { x: 0.03, y: 0.07, z: 0.8 } },
			{ typhoid: { x: 0.01, y: 0.01, z: 0.85 } },
			{ stomach: { x: 0.1, y: 0.1, z: 0.7 } },
			{
				chest_problem: {
					x: 0.9,
					y: 0.02,
					z: 0.05
				}
			}
		]
	}
};

exports.patientData = patientData;
exports.symptoms_diagnoses = symptoms_diagnoses;
exports.diagnoses_symptoms = diagnoses_symptoms;
