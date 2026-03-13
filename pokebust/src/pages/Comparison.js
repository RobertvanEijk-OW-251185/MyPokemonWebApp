import "../App.css";

import "../pokeapi/pokeapi.css";

import "../componentStyling/footer.css";
import FooterComponent from "../components/footer.js";

import HeroComponentComparison from "../components/heroComparison.js";
import PokeGrid from "../components/pokeGrid.js";

import PokiAPICall from "../pokeapi/api.js";

function Comparison() {
	return (
		<div class="ComparisonPage">
			<HeroComponentComparison></HeroComponentComparison>
			{/* <PokiAPICall pokemonName="bulbasaur" />
			<PokiAPICall pokemonName="pikachu" /> */}
			<PokeGrid></PokeGrid>
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Comparison;
