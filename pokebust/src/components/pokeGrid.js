import "../App.css";

import "../componentStyling/pokeGrid.css";

// import "../pokeapi/pokeapi.css";

// import "../componentStyling/footer.css";
// import FooterComponent from "../components/footer.js";

// import HeroComponentComparison from "../components/heroComparison.js";

// import PokiAPICall from "../pokeapi/api.js";

function PokeGrid() {
	return (
		<div class="gridContent">
			<div class="grid">
				<div class="searchBox1">
					<div class="searchField">Search...</div>
				</div>
				<div class="searchBox2">
					<div class="searchField">Search...</div>
				</div>
				<div class="pokeBall1"></div>
				<button class="comparebtn" id="CompareNowBTN">
					<div class="compareNow">COMPARE NOW</div>
				</button>
				<div class="pokeBall2"></div>
			</div>
		</div>
	);
}

export default PokeGrid;
