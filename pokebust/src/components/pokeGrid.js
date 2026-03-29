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

// Chart Imports
import RadarChart from "./RadarChartComponent.js";
import BarChart from "./BarChartComponent.js";
import DoughnutChart1 from "./DoughnutChartComponent1.js";
import DoughnutChart2 from "./DoughnutChartComponent2.js";

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
			stats: raw.stats,
			types: raw.types.map((t) => t.type.name),
			captureRate: speciesData.capture_rate,
		};
	};

	const [pokeBallVisible, setPokeBallVisible] = useState(true);

	const [isLoading, setIsLoading] = useState(false); // For loading state

	const handleCompare = async () => {
		setWinner(null);
		setVersusButtonVisible(true);
		setIsLoading(true); // Sets loading state to true, while fetching/comparing the information
		setButtonMoved(true);
		// Reset errors
		setError1(null);
		setError2(null);

		const versusButton = document.querySelector(".pokeBall3");
		if (versusButton) versusButton.style.display = "";

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

		if (result1.status === "fulfilled")
			console.log("Pokemon 1:", result1.value);
		if (result2.status === "fulfilled")
			console.log("Pokemon 2:", result2.value);
	};

	const [winner, setWinner] = useState(null);

	const calcOverallScore = (pokemon) => {
		const stats = pokemon.stats;

		const getStat = (name) =>
			// stats.find((stat) => stat.stat.name === name)?.base_stat ?? 0;
			stats.find((s) => s.stat.name === name)?.base_stat ?? 0;

		const hp = (getStat("hp") / 255) * 100;
		const attack = (getStat("attack") / 255) * 100;
		const defense = (getStat("defense") / 255) * 100;
		const speed = (getStat("speed") / 255) * 100;
		const spAtk = (getStat("special-attack") / 255) * 100;
		const spDef = (getStat("special-defense") / 255) * 100;

		return ((hp + attack + defense + speed + spAtk + spDef) / 600) * 100;
	};

	const [versusButtonVisible, setVersusButtonVisible] = useState(true);

	const handleVersus = () => {
		if (!pokemon1 || !pokemon2) return;

		const score1 = calcOverallScore(pokemon1);
		const score2 = calcOverallScore(pokemon2);

		console.log(score1);
		console.log(score2);

		setVersusButtonVisible(false);

		if (score1 > score2) {
			setWinner({ pokemon: pokemon1, score: score1.toFixed(2) });
			console.log(score1);
			return console.log("Pokemon1 wins");
		} else if (score1 < score2) {
			setWinner({ pokemon: pokemon2, score: score2.toFixed(2) });
			console.log(score1);
			return console.log("Pokemon2 wins");
		} else if (score1 == score2) {
			setWinner({ pokemon: null, score: null });
			console.log(score1);
			console.log(score2);
			return console.log("It's a tie");
		}
	};

	return (
		<div className="gridContent">
			<div
				className="grid"
				// style={
				// 	!pokeBallVisible
				// 		? { "grid-template-columns": "repeat(3, fit-content(100%))" }
				// 		: {}
				// }
			>
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

				{/* Comparison Radar Chart */}

				<div
					className="radarChartContainer"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					<RadarChart pokemon1={pokemon1} pokemon2={pokemon2}></RadarChart>
				</div>

				{/* Comparison Horisontal Bars */}

				<div
					className="barChartsContainer"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					<BarChart pokemon1={pokemon1} pokemon2={pokemon2}></BarChart>
				</div>

				{/* Pokeball To see Which Pokemon is "Better" */}

				<div
					className="pokeGeneralBox1"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					{pokemon1?.pokeDexDescription ? (
						<>
							<p className="descriptionTextTitle">Poké Data</p>
							<p className="descriptionText">Name</p>
							<p className="descriptionText">
								{pokemon1.name.charAt(0).toUpperCase() + pokemon1.name.slice(1)}
							</p>
							<p className="descriptionText">PokéDex Description</p>
							<p className="descriptionText">{pokemon1.pokeDexDescription}</p>
							<p className="descriptionText">Types</p>
							<p className="descriptionText">{pokemon1.types.join(", ")}</p>
							{/* <div className="typeIconRow">
								{pokemon1.types.map((type) => (
									<img
										key={type}
										src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`}
										alt={type}
										title={type}
										className="typeIcon"
									></img>
								))}
								<p className="descriptionText">{pokemon1.types.join(", ")}</p>
							</div> */}
							<p className="descriptionText">Weaknesses</p>
							<p className="descriptionText">
								{pokemon1.weaknesses.join(", ")}
							</p>
							{/* <div className="typeIconRow">
								{pokemon1.weaknesses.map((weakness) => (
									<img
										key={weakness}
										src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${weakness}.svg`}
										alt={weakness}
										title={weakness}
										className="typeIcon"
									/>
								))}
								<p className="descriptionText">
									{pokemon1.weaknesses.join(", ")}
								</p>
							</div> */}
						</>
					) : null}
				</div>

				{/* Pie Cahrt Indicating Types for Pokemon 1 */}

				<div
					className="pieChartContainer1"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					<DoughnutChart1 pokemon={pokemon1}></DoughnutChart1>
				</div>

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
							<p className="descriptionTextTitle">Poké Data</p>
							<p className="descriptionText">Name</p>
							<p className="descriptionText">
								{pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1)}
							</p>
							<p className="descriptionText">PokéDex Description</p>
							<p className="descriptionText">{pokemon2.pokeDexDescription}</p>
							<p className="descriptionText">Types</p>
							<p className="descriptionText">{pokemon2.types.join(", ")}</p>

							{/* <div className="typeIconRow">
								{pokemon2.types.map((type) => (
									<img
										key={type}
										src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`}
										alt={type}
										title={type}
										className="typeIcon"
									/>
								))}
								<p className="descriptionText">{pokemon2.types.join(", ")}</p>
							</div> */}
							<p className="descriptionText">Weaknesses</p>
							<p className="descriptionText">
								{pokemon2.weaknesses.join(", ")}
							</p>
							{/* <div className="typeIconRow">
								{pokemon2.weaknesses.map((weakness) => (
									<img
										key={weakness}
										src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${weakness}.svg`}
										alt={weakness}
										title={weakness}
										className="typeIcon"
									/>
								))}
							</div> */}
						</>
					) : null}
				</div>

				<div
					className="pokeBallVersus"
					style={
						!pokeBallVisible ? {} : { display: "none", boxShadow: "none" }
					}>
					<p className="descriptionTextTitle">Who should you choose??</p>
					<button
						className="pokeBall3"
						onClick={(e) => {
							e.currentTarget.style.display = "none";
							handleVersus();
						}}></button>

					{/* Versus Change */}

					{/* {winner && (
						<button className="pokeBall3" onClick={handleVersus}></button>
					)} */}

					{winner &&
						(winner.pokemon ? (
							<div className="versusResult">
								<img
									src={winner.pokemon.image}
									alt={winner.pokemon.name}
									className="versusWinnerSprite"
								/>
								<p className="descriptionTextTitle">
									{winner.pokemon.name.charAt(0).toUpperCase() +
										winner.pokemon.name.slice(1)}
								</p>
								<p className="descriptionText">
									Overall Score: {winner.score}%
								</p>
							</div>
						) : (
							<p className="descriptionText">It's a tie!</p>
						))}
				</div>

				{/* Pie Cahrt Indicating Types for Pokemon 2 */}

				<div
					className="pieChartContainer2"
					style={!pokeBallVisible ? { display: "flex" } : {}}>
					<DoughnutChart2 pokemon={pokemon2}></DoughnutChart2>
				</div>
			</div>
		</div>
	);
}

export default PokeGrid;
