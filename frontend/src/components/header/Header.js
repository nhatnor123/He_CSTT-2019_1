import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";

class Header extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {}

	render() {
		return (
			<header style={{ boxSizing: "border-box" }}>
				<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
					<ul class="navbar-nav">
						<li class="nav-item">
							<div
								style={{ marginLeft: "30px", fontSize: "21px" }}
							>
								<Link to="/" className="nav-link">
									TRANG CHỦ
								</Link>
							</div>
						</li>
						<li class="nav-item">
							<div
								style={{ marginLeft: "30px", fontSize: "21px" }}
							>
								<Link to="/diagnostic" className="nav-link">
									CHUẨN ĐOÁN BỆNH
								</Link>
							</div>
						</li>
						<li class="nav-item">
							<div
								style={{ marginLeft: "30px", fontSize: "21px" }}
							>
								<Link
									to="/expertknowledge"
									className="nav-link"
								>
									TRI THỨC CHUYÊN GIA
								</Link>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
