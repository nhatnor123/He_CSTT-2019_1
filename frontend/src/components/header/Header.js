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
							<div>
								<Link to="/" className="nav-link">
									HOME
								</Link>
							</div>
						</li>
						<li class="nav-item">
							<div>
								<Link to="/diagnostic" className="nav-link">
									DIAGNOSTIC
								</Link>
							</div>
						</li>
						<li class="nav-item">
							<div>
								<Link
									to="/expertknowledge"
									className="nav-link"
								>
									EXPERT KNOWLEDGE
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
