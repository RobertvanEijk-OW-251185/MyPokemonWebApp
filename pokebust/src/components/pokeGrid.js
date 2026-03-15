// import "../App.css";

// import "../componentStyling/pokeGrid.css";

// import "../pokeapi/pokeapi.css";
// import PokiAPICall from "../pokeapi/api.js";
// import { SearchBar } from "./searchComponentComparison.js";
// import { SearchBar2 } from "./searchComponentComparison2.js";
// import CompareButton from "./CompareButton.js";
// import "../pokeapi/pokeapi.css";

// import "../componentStyling/footer.css";
// import FooterComponent from "../components/footer.js";

// import HeroComponentComparison from "../components/heroComparison.js";

// import PokiAPICall from "../pokeapi/api.js";

// function PokeGrid() {
// 	return (
// 		<div class="gridContent">
// 			<div class="grid">
// 				<SearchBar></SearchBar>
// 				<SearchBar2></SearchBar2>
// 				<div class="pokeBall1"></div>
// 				<CompareButton></CompareButton>
// 				<div class="pokeBall2"></div>
// 			</div>
// 		</div>
// 	);
// }

// export default PokeGrid;

// Redoing the pages data being displayed, having the API calls made here with the button and search functionality

import "../componentStyling/pokeGrid.css";

import { useState } from "react";
import "../componentStyling/pokeGrid.css";
import { SearchBar } from "./searchComponentComparison.js";
import { SearchBar2 } from "./searchComponentComparison2.js";
import CompareButton from "./CompareButton.js";

function PokeGrid() {
	const [search1, setSearch1] = useState("");
	const [search2, setSearch2] = useState("");
	const [pokemon1, setPokemon1] = useState(null);
	const [pokemon2, setPokemon2] = useState(null);
	const [error1, setError1] = useState(null);
	const [error2, setError2] = useState(null);
	const [buttonMoved, setButtonMoved] = useState(false);

	const fetchPokemon = async (name) => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`,
		);

		if (!response.ok) throw new Error("Not found");
		const raw = await response.json();

		// 2nd Call for Pokedex Description:
		const speciesResponse = await fetch(raw.species.url);
		const speciesData = await speciesResponse.json();

		const description = speciesData.flavor_text_entries
			.find((entry) => entry.language.name === "en")
			?.flavor_text.replace(/\f|\n/g, " ");

		// 3rd Call: Fetch Weaknesses
		const typeResponses = await Promise.all(
			raw.types.map((t) => fetch(t.type.url).then((r) => r.json())),
		);

		const weaknesses = [
			...new Set(
				typeResponses.flatMap((t) =>
					t.damage_relations.double_damage_from.map((w) => w.name).toString(""),
				),
			),
		];

		return {
			name: raw.name,
			image: raw.sprites.other["official-artwork"].front_default,
			pokeDexDescription: description,
			weaknesses: weaknesses,
		};
	};

	const [pokeBallVisible, setPokeBallVisible] = useState(true);

	const [isLoading, setIsLoading] = useState(false); // For loading state

	const handleCompare = async () => {
		setIsLoading(true); // Sets loading state to true, while fetching/comparing the information
		setButtonMoved(true);
		// Reset errors
		setError1(null);
		setError2(null);

		// Fetch both searched pokemon at the same time
		const [result1, result2] = await Promise.allSettled([
			fetchPokemon(search1),
			fetchPokemon(search2),
		]);

		if (result1.status === "fulfilled") {
			setPokemon1(result1.value);
			setPokeBallVisible(false);
		} else {
			setError1("Pokémon not found!");
			setPokemon1(null);
		}

		if (result2.status === "fulfilled") {
			setPokemon2(result2.value);
		} else {
			setError2("Pokémon not found!");
			setPokemon2(null);
		}

		setIsLoading(false);
	};

	return (
		<div className="gridContent">
			<div className="grid">
				<SearchBar
					value={search1}
					onChange={(e) => setSearch1(e.target.value)}
				/>

				<SearchBar2
					value={search2}
					onChange={(e) => setSearch2(e.target.value)}
				/>

				<CompareButton
					onClick={handleCompare}
					style={buttonMoved ? { gridRow: "1", gridColumn: "2" } : {}}
				/>

				{/* Pokeball 1 OR Sprite 1 */}
				<div
					className="pokeBall1"
					style={
						!pokeBallVisible ? { background: "none", boxShadow: "none" } : {}
					}>
					{pokemon1 ? (
						<img src={pokemon1.image} alt={pokemon1.name} />
					) : error1 ? (
						<p className="pokeError">{error1}</p>
					) : null}
				</div>

				{/* Comparison Hex Chart */}
				{/* Comparison Horisontal Bars */}
				{/* Pokeball To see Which Pokemon is "Better" */}

				<div
					className="pokeGeneralBox1"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					{pokemon1?.pokeDexDescription ? (
						<>
							<p className="descriptionTextTitle">POKEDATA</p>
							<p className="descriptionText">Name</p>
							<p className="descriptionText">{pokemon1.name}</p>
							<p className="descriptionText">Pokedex Description</p>
							<p className="descriptionText">{pokemon1.pokeDexDescription}</p>
							<p className="descriptionText">Weaknesses</p>
							<p className="descriptionText">{pokemon1.weaknesses}</p>
						</>
					) : null}
				</div>

				{/* Pie Cahrt Indicating Types for Pokemon 1 */}

				{/* Pokeball 2 OR Sprite 2 */}
				<div
					className="pokeBall2"
					style={
						!pokeBallVisible ? { background: "none", boxShadow: "none" } : {}
					}>
					{pokemon2 ? (
						<img src={pokemon2.image} alt={pokemon2.name} />
					) : error2 ? (
						<p className="pokeError">{error2}</p>
					) : null}
				</div>
				<div
					className="pokeGeneralBox2"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					{pokemon2?.pokeDexDescription ? (
						<>
							<p className="descriptionTextTitle">POKEDATA</p>
							<p className="descriptionText">Name</p>
							<p className="descriptionText">{pokemon2.name}</p>
							<p className="descriptionText">Pokedex Description</p>
							<p className="descriptionText">{pokemon2.pokeDexDescription}</p>
							<p className="descriptionText">Weaknesses</p>
							<p className="descriptionText">{pokemon2.weaknesses}</p>
						</>
					) : null}
				</div>

				{/* Pie Cahrt Indicating Types for Pokemon 2 */}
			</div>
		</div>
	);
}

export default PokeGrid;
