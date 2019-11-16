import React from "react";
import "./App.css";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Diagnostic from "./components/diagnostic/Diagnostic";
import Home from "./components/home/Home";
import ExpertKnowledge from "./components/exportKnowledge/ExportKnowledge";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App" style={{backgroundColor:"rgb(238,238,238)"}}>
			<div class="container-fluid" >
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
					<Switch>
						<Route
							path="/diagnostic"
							exact
							component={Diagnostic}
						/>
					</Switch>
					<Switch>
						<Route
							path="/expertknowledge"
							exact
							component={ExpertKnowledge}
						/>
					</Switch>
					{/* <Footer /> */}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
