// Doughnut and Pie Charts

// Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
// They are excellent at showing the relational proportions between data.
// Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their cutout. This equates to what portion of the inner should be cut out. This defaults to 0 for pie charts, and '50%' for doughnuts.
// They are also registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.

// :::: tabs
// ::: tab Doughnut

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// <block:setup:1>
// const data = {
// 	labels: ["Red", "Blue", "Yellow"],
// 	datasets: [
// 		{
// 			label: "My First Dataset",
// 			data: [300, 50, 100],
// 			backgroundColor: [
// 				"rgb(255, 99, 132)", // Set colors for chart sections here
// 				"rgb(54, 162, 235)", // Set colors for chart sections here
// 				"rgb(255, 205, 86)", // Set colors for chart sections here
// 			],
// 			hoverOffset: 4, // Hover effect displaying the data...
// 		},
// 	],
// };
// </block:setup>

// <block:config:0>
// const config = {
// 	type: "doughnut",
// 	data: data,
// };
// </block:config>

// module.exports = {
// 	actions: [],
// 	config: config,
// };

// function DoughnutChart1() {
// 	return (
// 		<div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
// 			<p className="descriptionTextTitle">Catch Rates</p>
// 			<Doughnut data={data} />
// 		</div>
// 	);
// }

// export default DoughnutChart1;

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BALLS = [
	{ label: "Poké Ball", multiplier: 1, color: "rgb(255, 99, 132)" },
	{ label: "Great Ball", multiplier: 1.5, color: "rgb(54, 162, 235)" },
	{ label: "Ultra Ball", multiplier: 2, color: "rgb(255, 205, 86)" },
	{ label: "Master Ball", multiplier: 255, color: "rgb(153, 102, 255)" },
];

// Catch rate probability per given ball
// formula 1: catchValue = ((3 * maxHP - 2 * currentHP) * catchRate * ballBonus) / (3 * maxHP)
// formula 2: probability = 1 - (1 - catchValue / 255) ^ 4

// Restrictions:
// MaxHP = 45 assuming pokemon's hp at lvl 20;
// CurrentHP = MaxHP assuming the pokemon is at full health

function calcCatchRate(captureRate, multiplier) {
	const maxHP = 45;
	const currentHP = maxHP;

	const catchValue =
		((3 * maxHP - 2 * currentHP) * captureRate * multiplier) / (3 * maxHP);
	const clamped = Math.min(catchValue, 255);
	const probability = 1 - Math.pow(1 - clamped / 255, 4);

	return Math.round(probability * 100);
}

function DoughnutChart1({ pokemon }) {
	if (!pokemon) return null;

	const catchData = BALLS.map((ball) =>
		calcCatchRate(pokemon.captureRate, ball.multiplier),
	);

	const data = {
		labels: BALLS.map((b) => b.label),
		datasets: [
			{
				label: "Catch Rate %",
				data: catchData,
				backgroundColor: BALLS.map((b) => b.color),
				borderColor: "#000",
				hoverOffset: 4,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { position: "top" },
			tooltip: {
				callbacks: {
					label: (item) => ` ${item.label}: ${item.raw}%`,
				},
			},
		},
	};

	return (
		<div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
			<p className="descriptionTextTitle">Catch Rates</p>
			<Doughnut data={data} options={options} />
		</div>
	);
}

export default DoughnutChart1;
