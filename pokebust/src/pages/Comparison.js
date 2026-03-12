import "../App.css";

import "../pokeapi/pokeapi.css";

import "../componentStyling/footer.css";
import FooterComponent from "../components/footer.js";

import PokiAPICall from "../pokeapi/api.js";

function Comparison() {
	return (
		<div class="ComparisonPage">
			<h1>Comparison Page</h1>
			<PokiAPICall pokemonName="Charmander" />
			<PokiAPICall pokemonName="Pikachu" />
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Comparison;
