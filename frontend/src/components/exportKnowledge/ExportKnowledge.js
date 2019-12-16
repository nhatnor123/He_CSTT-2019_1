import React from "react";
import axios from "axios";
import { IPAdress } from "../../config/IPAddress";
export default class ExportKnowledge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			symptoms_diagnoses_relation: null
		};
	}

	async componentDidMount() {
		let result = await axios.get(
			`${IPAdress}/api/selectDataSymptomsDiagnosesRelation`
		);
		console.log(result.data);
		this.setState({
			symptoms_diagnoses_relation: result.data
		});
	}

	render() {
		return (
			<div className="expertknowledge" style={{ color: "black" }}>
				{this.state.symptoms_diagnoses_relation &&
					this.state.symptoms_diagnoses_relation.map(item => {
						{
							return (
								<div
									className="row"
									style={{
										textAlign: "center",
										margin: "20px 0 10px 0"
									}}
								>
									<div
										className="col-md-2"
										style={{
											textTransform: "uppercase",
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center"
										}}
									>
										{item["diagnose"]}
									</div>
									<div className="col-md-1">
										temperature
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["temperature_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["temperature_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["temperature_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										headache
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["headache_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["headache_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["headache_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										stomachache
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["stomachache_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["stomachache_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["stomachache_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										cough
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["cough_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["cough_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["cough_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										chest_pain
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["chest_pain_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["chest_pain_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["chest_pain_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										bloating
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["bloating_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["bloating_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["bloating_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										diarrhea
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["diarrhea_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["diarrhea_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["diarrhea_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										fatigue
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["fatigue_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["fatigue_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["fatigue_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										nausea
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["nausea_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["nausea_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["nausea_z"]
													}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-1">
										dizziness
										<div className="row">
											<div className="col-md-5">x</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["dizziness_x"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">y</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["dizziness_y"]
													}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5">z</div>
											<div className="col-md-5">
												<input
													placeholder={
														item["dizziness_z"]
													}
												/>
											</div>
										</div>
									</div>
								</div>
							);
						}
					})}

				<div style={{marginTop:"30px", marginBottom:"30px"}}>
					<button className="btn btn-primary" style={{marginRight:"20%"}}>Reset</button>
					<button className="btn btn-primary">Save</button>
				</div>
			</div>
		);
	}
}
