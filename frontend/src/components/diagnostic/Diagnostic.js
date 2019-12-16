import "./Diagnostic.css";
import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { IPAdress } from "../../config/IPAddress";

class Diagnostic extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataLevelOfSymptoms: {
				temperature: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				headache: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				stomachache: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				cough: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				chest_pain: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},

				bloating: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				diarrhea: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				fatigue: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				nausea: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				},
				dizziness: {
					x: { type: "language", value: "RatThap" },
					y: { type: "language", value: "RatThap" },
					z: { type: "language", value: "RatThap" }
				}
			},

			diagnosisValues: {
				fever: null,
				malaria: null,
				typhoid: null,
				stomach: null,
				chest_problem: null
			},
			levelsOfSymtom: [
				{
					name: "RatThap",
					c: "thap",
					h: "rat",
					displayName: "Rất thấp"
				},
				{
					name: "HonThap",
					c: "thap",
					h: "hon",
					displayName: "Hơn thấp"
				},
				{ name: "Thap", c: "thap", h: null, displayName: "Thấp" },
				{
					name: "KhaNangThap",
					c: "thap",
					h: "khaNang",
					displayName: "Khả năng thấp"
				},
				{ name: "ItThap", c: "thap", h: "it", displayName: "Ít thấp" },
				{ name: "ItCao", c: "cao", h: "it", displayName: "Ít cao" },
				{
					name: "KhaNangCao",
					c: "cao",
					h: "khaNang",
					displayName: "Khả năng cao"
				},
				{ name: "Cao", c: "cao", h: null, displayName: "Cao" },
				{ name: "HonCao", c: "cao", h: "hon", displayName: "Hơn cao" },
				{ name: "RatCao", c: "cao", h: "rat", displayName: "Rất cao" }
			]
		};

		this.actionSelectLevelOfSymtoms = this.actionSelectLevelOfSymtoms.bind(
			this
		);
		this.clickDiagnoseButton = this.clickDiagnoseButton.bind(this);
		this.clickDiagnoseButtonDuocChuanHoa = this.clickDiagnoseButtonDuocChuanHoa.bind(
			this
		);
	}

	actionSelectLevelOfSymtoms = (symptomName, PFS_Parameter) => {
		return event => {
			let languageValue = event.target.value;

			if (
				languageValue === "RatThap" ||
				languageValue === "HonThap" ||
				languageValue === "KhaNangThap" ||
				languageValue === "ItThap" ||
				languageValue === "ItCao" ||
				languageValue === "KhaNangCao" ||
				languageValue === "HonCao" ||
				languageValue === "RatCao" ||
				languageValue === "Cao" ||
				languageValue === "Thap"
			) {
				this.state.dataLevelOfSymptoms[symptomName][PFS_Parameter] = {
					type: "language",
					value: languageValue
				};
			} else {
				this.state.dataLevelOfSymptoms[symptomName][PFS_Parameter] = {
					type: "number",
					value: languageValue
				};
			}

			console.log("du lieu chua dc hieu chuan");
			console.log(
				this.state.dataLevelOfSymptoms[symptomName][PFS_Parameter]
			);
		};
	};

	async clickDiagnoseButton() {
		const resData = await axios.post(
			`${IPAdress}/api/getFuzzyDiagnoseValueFromPFSPatientData`,
			{
				dataLevelOfSymptom: this.state.dataLevelOfSymptoms
			}
		);
		console.log(resData.data);

		this.setState({ ...this.state, diagnosisValues: resData.data });
	}

	async clickDiagnoseButtonDuocChuanHoa() {
		console.log(this.state.dataLevelOfSymptoms);
		const resData = await axios.post(
			`${IPAdress}/api/getFuzzyDiagnoseValueFromPFSPatientDataDuocChuanHoa`,
			{
				dataLevelOfSymptom: this.state.dataLevelOfSymptoms
			}
		);
		console.log(resData.data);

		this.setState({ ...this.state, diagnosisValues: resData.data });
		// alert("dit me m")
	}

	render() {
		let levelsOfSymtomTagDiv = this.state.levelsOfSymtom.map(
			(item, key) => <option value={item.name}>{item.displayName}</option>
		);

		let levelNumberArray = [];
		for (let i = 0; i <= 100; i++) {
			levelNumberArray.push(i);
		}
		let levelNumberArrayTag = levelNumberArray.map((item, key) => (
			<option value={item}>{item}</option>
		));

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
							<Button color="primary">Tìm kiếm</Button>
						</div>
					</div>
					<div style={{ marginTop: "15px" }}>
						<div class="row">
							<div class="col-md-4">Tên</div>
							<div class="col-md-8">Ng Luu Nhat</div>
						</div>
						<div class="row">
							<div class="col-md-4">Ngày sinh</div>
							<div class="col-md-8">20/10/1998</div>
						</div>
						<div class="row">
							<div class="col-md-4">Giới tính</div>
							<div class="col-md-8">Male</div>
						</div>
						<div class="row">
							<div class="col-md-4">ID BHYT</div>
							<div class="col-md-8">1111</div>
						</div>
					</div>
					<div
						class="row"
						style={{
							marginLeft: "40px",
							marginTop: "45px",
							marginBottom: "40px"
						}}
					>
						<Button>Thêm bệnh nhân mới</Button>
					</div>
					<div class="row" style={{ marginLeft: "20px" }}>
						<div>
							<div class="row" style={{ fontSize: "20px" }}>
								Thông tin chuẩn đoán mới nhất
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
							<div
								class="row"
								style={{ fontSize: "20px", marginTop: "10px" }}
							>
								<p>Ngày : 06/11/2019</p>
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
								Chọn các mức của các triệu chứng
							</div>
							<div class="row">
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Temperature
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"temperature",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"temperature",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"temperature",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
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
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"headache",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"headache",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"headache",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
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
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"stomachache",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"stomachache",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"stomachache",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
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
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"cough",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"cough",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"cough",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
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
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"chest_pain",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"chest_pain",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"chest_pain",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Bloating
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"bloating",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"bloating",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"bloating",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Diarrhea
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"diarrhea",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"diarrhea",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"diarrhea",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Fatigue
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"fatigue",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"fatigue",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"fatigue",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Nausea
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"nausea",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"nausea",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"nausea",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div style={{ fontSize: "21px" }}>
										Dizziness
									</div>
									<div style={{ border: "1px solid" }}>
										<div class="row">
											<div class="col-md-4">Clearly</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"dizziness",
														"x"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">Normal</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"dizziness",
														"y"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												Unclearly
											</div>
											<div class="col-md-8">
												<select
													onChange={this.actionSelectLevelOfSymtoms(
														"dizziness",
														"z"
													)}
												>
													{levelsOfSymtomTagDiv}
													{levelNumberArrayTag}
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div style={{ marginTop: "20px", width: "80%" }}>
								<Button onClick={this.clickDiagnoseButton}>
									Chuẩn đoán với dữ liệu chưa chuẩn hóa
								</Button>
								<Button
									onClick={
										this.clickDiagnoseButtonDuocChuanHoa
									}
									style={{ marginLeft: "40px" }}
								>
									Chuẩn đoán với dữ liệu chuẩn hóa
								</Button>
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
									Xác suất các bệnh mắc phải
								</b>
							</div>
							<div
								class="row"
								style={{ backgroundColor: "white" }}
							>
								<div style={{ marginLeft: "20px" }}>
									<div class="row">
										<p>
											Fever :{" "}
											{this.state.diagnosisValues.fever &&
												this.state.diagnosisValues.fever.toFixed(
													4
												)}
										</p>
									</div>
									<div class="row">
										<p>
											Malaria :{" "}
											{this.state.diagnosisValues
												.malaria &&
												this.state.diagnosisValues.malaria.toFixed(
													4
												)}
										</p>
									</div>
									<div class="row">
										<p>
											Typhoid :{" "}
											{this.state.diagnosisValues
												.typhoid &&
												this.state.diagnosisValues.typhoid.toFixed(
													4
												)}
										</p>
									</div>
									<div class="row">
										<p>
											Stomach :{" "}
											{this.state.diagnosisValues
												.stomach &&
												this.state.diagnosisValues.stomach.toFixed(
													4
												)}
										</p>
									</div>
									<div class="row">
										<p>
											Chest problem :{" "}
											{this.state.diagnosisValues
												.chest_problem &&
												this.state.diagnosisValues.chest_problem.toFixed(
													4
												)}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-7" style={{ marginLeft: "30px" }}>
							<div
								class="row"
								style={{ backgroundColor: "white" }}
							>
								<div style={{ marginLeft: "20px" }}>
									<div class="row">
										<p>Điều trị : </p>
										<div style={{ margin: "10px 10px" }}>
											{this.state.diagnosisValues.fever &&
												this.state.diagnosisValues
													.fever >= 0.5 && (
													<div>
														Uống nhiều nước, có thể
														dùng dung dịch oresol
														hoặc nước trái cây; Mặc
														quần áo rộng, nhẹ, thoải
														mái; Đắp chăn nếu cảm
														thấy ớn lạnh, cho đến
														khi triệu chứng này biến
														mất; Sử dụng
														acetaminophen hoặc
														ibuprofen theo hướng dẫn
														trong tờ thông tin
														thuốc.
													</div>
												)}
											{this.state.diagnosisValues
												.malaria &&
												this.state.diagnosisValues
													.malaria >= 0.5 && (
													<div>
														Điều trị cắt cơn sốt:
														Nhiễm Plasmodium vivax:
														Chloroquine tổng liều
														25mg/kg cân nặng chia 3
														ngày điều trị: ngày 1 và
														ngày 2 uống 10 mg/kg cân
														nặng, ngày 3 uống 5
														mg/kg cân nặng hoặc Hoặc
														artesunat tổng liều 16
														mg/kg cân nặng chia làm
														7 ngày điều trị: ngày 1
														uống 4 mg/kg cân nặng,
														từ ngày thứ 2 đến ngày
														thứ 7 uống 2 mg/kg cân
														nặng (không dùng
														artesunat cho phụ nữ có
														thai trong 3 tháng đầu
														trừ trường hợp sốt rét
														ác tính) Hoặc Quinin
														sulfat liều 30 mg/kg/24
														giờ chia 3 lần uống
														trong ngày, điều trị
														trong 7 ngày. Nhiễm
														Plasmodium falciparum:
														Thuốc phối hợp có dẫn
														xuất artemisinin: thuốc
														viên Arterakine hoặc CV
														artecan (40mg
														dihydroartemisinin +
														320mg piperaquine
														phosphat) Liều dùng:
														Dưới 3 tuổi: ngày đầu 1
														viên, hai ngày sau mỗi
														ngày 1/2 viên. Từ 3 đến
														dưới 8 tuổi: ngày đầu 2
														viên, hai ngày sau mỗi
														ngày 1 viên. Từ 8 đến
														dưới 15 tuổi: ngày đầu 3
														viên, hai ngày sau mỗi
														ngày 1,5 viên. Từ 15
														tuổi trở lên: ngày đầu 4
														viên, hai ngày sau mỗi
														ngày 2 viên. Không dùng
														cho phụ nữ có thai trong
														3 tháng đầu.
													</div>
												)}
											{this.state.diagnosisValues
												.typhoid &&
												this.state.diagnosisValues
													.typhoid >= 0.5 && (
													<div>
														- Bù nư­­ớc điện giải
														(1500-2000ml/ngày):
														Glucose 5%,
														Ringerlactat, Natri
														chlorid 9%0 - Hạ sốt khi
														sốt cao - An thần, sinh
														tố - Dinh d­­ưỡng: Chế
														độ ăn lỏng - mềm đủ chất
														dinh d­­ưỡng trong thời
														gian sốt. Đặc dần trong
														thời kỳ hồi phục.- Xuất
														huyết tiêu hoá: Bất
														động, ch­­ườm lạnh,
														thuốc cầm máu, truyền
														máu t­ươi. - Thủng ruột:
														Chống sốc điều trị ngoại
														khoa. - Vấn đề dùng
														Corticoid: Nhiều tác giả
														thống nhất dùng cho bệnh
														nhân thư­­ơng hàn có
														biến chứng choáng nội
														độc tố. Dùng Solumedrol
														30mg/kg truyền trong 30
														phút đầu, có thể lặp lại
														sau 4-6 giờ trong 48
														giờ.
													</div>
												)}
											{this.state.diagnosisValues
												.stomach &&
												this.state.diagnosisValues
													.stomach >= 0.5 && (
													<div>
														Muốn điều trị tận gốc và
														ngăn cản viêm loét cấp
														tính chuyển thành mãn
														tính, cần phối hợp tác
														động vào cả 3 yếu tố: Ức
														chế tác động xấu của tác
														nhân gây bệnh: vi khuẩn
														HP, các thuốc NSAID,…
														Điều chỉnh lại cân bằng
														tấn công-bảo vệ: giảm
														yếu tố tấn công, tăng
														yếu tố bảo vệ Tăng tốc
														phục hồi tổn thương:
														nhanh chóng phục hồi các
														vết loét sẵn có Thuốc
														điều trị loét được chia
														làm các nhóm sau Thuốc
														kháng toan Thuốc kháng
														tiết Là các thuốc làm
														giảm tiết acid dịch vị
														qua nhiều cơ chế khác
														nhau do kháng thụ thể
														H2, kháng choline, kháng
														gastrine và kháng bơm
														proton của tế bào viền
														thành dạ dày. Thuốc
														kháng choline Thuốc
														kháng H2: Ức chế sự tiết
														acid không chỉ sau kích
														thích histamine mà cả
														sau kích thích dây X,
														kích thích bằng gastrine
														và cả thử nghiệm bữa ăn
													</div>
												)}
											{this.state.diagnosisValues
												.chest_problem &&
												this.state.diagnosisValues
													.chest_problem >= 0.5 && (
													<div>
														Thuốc kháng bơm proton:
														Là thụ thể cuối cùng của
														tế bào viền phụ trách sự
														tiết acide chlorhydride,
														do đó thuốc ức chế bơm
														proton có tác dụng chung
														và mạnh nhất. +
														Omeprazol (Mopral,
														Lomac, Omez, Losec). +
														Esomeprazole (Nexium):
														đồng phân của Omeprazole
														có thời gian bán huỷ lâu
														hơn và có tác dụng ức
														chế tiết Acide và dịch
														vị tốt hơn.. +
														Lanzorprazol (Lanzor,
														Ogast)
													</div>
												)}
										</div>
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
