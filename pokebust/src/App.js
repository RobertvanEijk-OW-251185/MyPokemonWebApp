// import logo from "./logo.svg";
import "./App.css";

// Import Component Styling
import "./componentStyling/navbar.css";
import "./componentStyling/hero.css";
import "./componentStyling/dashcards.css";
import "./componentStyling/footer.css";
import "./componentStyling/timeline.css";

// Import Components
import NavBar from "./components/navbar.js";
import HeroComponent from "./components/hero.js";
import DashCards from "./components/dashcards.js";
import FooterComponent from "./components/footer.js";

// Navbar Imports (Maybe Temp)\
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// Import Browser Router stuff IDKKKKKKKKKK
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import Pages stuff maybeeeeee
import Dashboard from "./pages/Dashboard";
import Comparison from "./pages/Comparison";
import Timeline from "./pages/Timeline";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/comparison" element={<Comparison />} />
					<Route path="/timeline" element={<Timeline />} />
				</Routes>
				{/* <HeroComponent></HeroComponent> */}
				{/* <DashCards></DashCards> */}
				{/* <FooterComponent></FooterComponent> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
