import "./Diagnostic.css";
import React, { Component } from "react";
import { Button } from "reactstrap";
class Diagnostic extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				class="row"
				style={{ color: "black", backgroundColor: "rgb(238,238,238)" }}
			>
				<div class="col-md-2" style={{ borderRightStyle: "solid" }}>
					<div class="row" style={{ marginTop: "15px" }}>
						<div class="col-md-2">
							<p>ID</p>
						</div>
						<div class="col-md-5">
							<input />
						</div>
						<div class="col-md-3">
							<Button color="primary">Search</Button>
						</div>
					</div>
					<div style={{ marginTop: "15px" }}>
						<div class="row">
							<div class="col-md-4">Name</div>
							<div class="col-md-8">Ng Luu Nhat</div>
						</div>
						<div class="row">
							<div class="col-md-4">Birth</div>
							<div class="col-md-8">20/10/1998</div>
						</div>
						<div class="row">
							<div class="col-md-4">Gender</div>
							<div class="col-md-8">Male</div>
						</div>
						<div class="row">
							<div class="col-md-4">ID BHYT</div>
							<div class="col-md-8">1111</div>
						</div>
					</div>
					<div class="row" style={{marginLeft:"40px", marginTop:"45px", marginBottom:"40px",}}>
						<Button>Add new patient</Button>
					</div>
					<div class="row" style={{marginLeft:"20px"}}>
						<div>
							<div class="row" style={{fontSize:"20px"}}>
								Lastest diagnosistic information
							</div>
							<div
								class="row"
								style={{ backgroundColor: "white" }}	
							>
								<div style={{ marginLeft: "20px" }}>
									<div class="row">
										<p>Sick hard (0.43)</p>
									</div>
									<div class="row">
										<p>Sick hard (0.43)</p>
									</div>
									<div class="row">
										<p>Sick hard (0.43)</p>
									</div>
								</div>
							</div>
							<div class="row" style={{fontSize:"20px", marginTop:"10px"}}>
								<p>Date : 06/11/2019</p>
							</div>
						</div>
					</div>
				</div>
				<div
					class="col-md-9"
					style={{ marginLeft: "25px", marginTop: "10px" }}
				>
					<div class="row">
						<div style={{ width: "100%" }}>
							<div
								class="row"
								style={{ marginLeft: "10px", fontSize: "30px" }}
							>
								Select the level of symptoms
							</div>
							<div class="row">
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Temperature
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-5">Clearly</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">Normal</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">
												Unclearly
											</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Headache
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-5">Clearly</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">Normal</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">
												Unclearly
											</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Stomachache
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-5">Clearly</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">Normal</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">
												Unclearly
											</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Cough
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-5">Clearly</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">Normal</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">
												Unclearly
											</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Chest_pain
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-5">Clearly</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">Normal</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-5">
												Unclearly
											</div>
											<div class="col-md-7">
												<select>
													<option value="None">
														None
													</option>
													<option value="VeryLow">
														VeryLow
													</option>
													<option value="Low">
														Low
													</option>
													<option value="LittleLow">
														LittleLow
													</option>
													<option value="Medium">
														Medium
													</option>
													<option value="LittleHigh">
														LittleHigh
													</option>
													<option value="High">
														High
													</option>
													<option value="VeryHigh">
														VeryHigh
													</option>
													<option value="Completely">
														Completely
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div style={{ marginTop: "20px", width: "80%" }}>
								<Button>Diagnose</Button>
							</div>
						</div>
					</div>
					<div
						class="row"
						style={{ marginTop: "50px", marginBottom: "220px" }}
					>
						<div class="col-md-4" style={{ marginRight: "23px" }}>
							<div class="row">
								<b style={{ fontSize: "20px", color: "black" }}>
									Sick and diagnosis probability
								</b>
							</div>
							<div
								class="row"
								style={{ backgroundColor: "white" }}
							>
								<div style={{ marginLeft: "20px" }}>
									<div class="row">
										<p>this is some diagnosis</p>
									</div>
									<div class="row">
										<p>this is some diagnosis</p>
									</div>
									<div class="row">
										<p>this is some diagnosis</p>
									</div>
									<div class="row">
										<p>this is some diagnosis</p>
									</div>
									<div class="row">
										<p>this is some diagnosis</p>
									</div>
								</div>
							</div>

							<div
								class="row"
								style={{
									marginTop: "10px"
								}}
							>
								<div class="col-md-7">
									<Button>Probability 5 disases</Button>
								</div>
								<div class="col-md-5">
									<Button>Save</Button>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<b style={{ fontSize: "20px", color: "black" }}>
									Image
								</b>
							</div>
							<div class="row">
								<img
									src="https://am-a.akamaihd.net/image?quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/en_US/328566a634ec929c4fc0ec5507c3b42a3bd4fb36/assets/img/cover-1.jpg"
									style={{ width: "100%", height: "100%" }}
								></img>
							</div>
						</div>
						<div class="col-md-3" style={{ marginLeft: "30px" }}>
							<div class="row">
								<b style={{ fontSize: "20px", color: "black" }}>
									Medical advice
								</b>
							</div>
							<div
								class="row"
								style={{ backgroundColor: "white" }}
							>
								<div style={{ marginLeft: "20px" }}>
									<div class="row">
										<p>this is some Medical advice</p>
									</div>
									<div class="row">
										<p>this is some Medical advice</p>
									</div>
									<div class="row">
										<p>this is some Medical advice</p>
									</div>
									<div class="row">
										<p>this is some Medical advice</p>
									</div>
									<div class="row">
										<p>this is some Medical advice</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Diagnostic;
