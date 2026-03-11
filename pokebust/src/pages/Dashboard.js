// // import logo from "./logo.svg";
// import "../App.css";
// import "../componentStyling/navbar.css";
// import "../componentStyling/hero.css";
// import "../componentStyling/dashcards.css";
// import "../componentStyling/footer.css";
// import NavBar from "../components/navbar.js";
// import HeroComponent from "../components/hero.js";
// import DashCards from "../components/dashcards.js";
// import FooterComponent from "../components/footer.js";

// function App() {
// 	return (
// 		<div className="App">
// 			<NavBar></NavBar>
// 			<HeroComponent></HeroComponent>
// 			<DashCards></DashCards>
// 			<FooterComponent></FooterComponent>
// 		</div>
// 	);
// }

// export default App;

// import logo from "./logo.svg";
import "../App.css";

// Import Component Styling
import "../componentStyling/navbar.css";
import "../componentStyling/hero.css";
import "../componentStyling/dashcards.css";
import "../componentStyling/footer.css";
// Import Components
import NavBar from "../components/navbar.js";
import HeroComponent from "../components/hero.js";
import DashCards from "../components/dashcards.js";
import FooterComponent from "../components/footer.js";

function Dashboard() {
	return (
		<div>
			<HeroComponent></HeroComponent>
			<DashCards></DashCards>
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Dashboard;
