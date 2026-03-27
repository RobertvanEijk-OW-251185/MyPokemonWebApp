// Radar Chart

// https://github.com/chartjs/Chart.js/blob/master/docs/charts/radar.md

// A radar chart is a way of showing multiple data points and the variation between them.
// They are often useful for comparing the points of two or more different data sets.

// <block:setup:1>

import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

const STAT_ORDER = [
	"hp",
	"attack",
	"defense",
	"special-attack",
	"special-defense",
	"speed",
];
const STAT_LABELS = ["HP", "Atk.", "Def.", "Sp.Atk.", "Sp.Def.", "Spd."];

// const data = {
// 	labels: ["HP", "Def.", "Sp.Def.", "Spd.", "Sp.Atk.", "Atk."],
// 	datasets: [
// 		{
// 			label: "My First Dataset",
// 			data: [65, 59, 90, 81, 56, 55],
// 			fill: true,
// 			backgroundColor: "rgba(255, 99, 132, 0.2)",
// 			borderColor: "rgb(255, 99, 132)",
// 			pointBackgroundColor: "rgb(255, 99, 132)",
// 			pointBorderColor: "#fff",
// 			pointHoverBackgroundColor: "#fff",
// 			pointHoverBorderColor: "rgb(255, 99, 132)",
// 		},
// 		{
// 			label: "My Second Dataset",
// 			data: [28, 48, 40, 19, 96, 27],
// 			fill: true,
// 			backgroundColor: "rgba(54, 162, 235, 0.2)",
// 			borderColor: "rgb(54, 162, 235)",
// 			pointBackgroundColor: "rgb(54, 162, 235)",
// 			pointBorderColor: "#fff",
// 			pointHoverBackgroundColor: "#fff",
// 			pointHoverBorderColor: "rgb(54, 162, 235)",
// 		},
// 	],
// };
// </block:setup>

// <block:config:0>
// const config = {
// 	type: "radar",
// 	data: data,
// 	options: {
// 		elements: {
// 			line: {
// 				borderWidth: 3,
// 			},
// 		},
// 	},
// };
// </block:config>

// module.exports = {
// 	actions: [],
// 	config: config,
// };

function getStat(pokemon, statName) {
	return pokemon?.stats.find((s) => s.stat.name === statName)?.base_stat ?? 0;
}

function RadarChart({ pokemon1, pokemon2 }) {
	const data = {
		labels: STAT_LABELS,
		datasets: [
			{
				label: pokemon1
					? pokemon1.name.charAt(0).toUpperCase() + pokemon1.name.slice(1)
					: "Pokémon 1",
				data: STAT_ORDER.map((stat) => getStat(pokemon1, stat)),
				fill: true,
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgb(255, 99, 132)",
				pointBackgroundColor: "rgb(255, 99, 132)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(255, 99, 132)",
			},
			{
				label: pokemon2
					? pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1)
					: "Pokémon 2",
				data: STAT_ORDER.map((stat) => getStat(pokemon2, stat)),
				fill: true,
				backgroundColor: "rgba(54, 162, 235, 0.2)",
				borderColor: "rgb(54, 162, 235)",
				pointBackgroundColor: "rgb(54, 162, 235)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(54, 162, 235)",
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			r: {
				beginAtZero: true,
				suggestedMax: 255,
			},
		},
	};

	if (!pokemon1 && !pokemon2) return null;

	return (
		<div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
			<p className="descriptionTextTitle">Poké Stats</p>
			<Radar data={data} />
		</div>
	);
}

export default RadarChart;

// export default RadarChart;
