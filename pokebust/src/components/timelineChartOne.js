import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const labels = ["Health", "Attack", "Defense", "Speed", "Sp. Atk", "Sp. Def"];

const data = {
	labels,
	datasets: [
		{
			label: "Pokémon 1",
			data: [65, 59, 80, 81, 56, 55],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			tension: 0.3, // - curve smoothness, 0 = straight lines
		},
	],
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: { position: "top" },
	},
};

const LEVELS = Array.from({ length: 100 }, (_, i) => i + 1);

const STAT_COLOURS = {
	hp: { border: "rgb(255, 99, 132)", background: "rgba(255, 99, 132, 0.2)" },
	attack: {
		border: "rgb(255, 159, 64)",
		background: "rgba(255, 159, 64, 0.2)",
	},
	defense: {
		border: "rgb(255, 205, 86)",
		background: "rgba(255, 205, 86, 0.2)",
	},
	"special-attack": {
		border: "rgb(54, 162, 235)",
		background: "rgba(54, 162, 235, 0.2)",
	},
	"special-defense": {
		border: "rgb(153, 102, 255)",
		background: "rgba(153, 102, 255, 0.2)",
	},
	speed: { border: "rgb(75, 192, 192)", background: "rgba(75, 192, 192, 0.2)" },
};

// (Formula's do not include use of ev's, iv's,  or berries/other held items upon levelling)

// Other Stats (Attack, Defense, Sp. Atk, Sp. Def, Speed):
// (( 2 * baseStat * level ) / 100 ) + level +

// HP Formula:
//  (( 2 * baseStat * level ) / 100 ) + level + 10

function calcStatAtLevel(baseStat, level, isHP) {
	if (isHP) {
		return Math.floor((2 * baseStat * level) / 100) + level + 10;
	} else {
		return Math.floor((2 * baseStat * level) / 100) + level + 5;
	}
}

function TimeLineChart({ pokemon, selectedStat, isLoading }) {
	const baseStat = pokemon?.stats.find(
		(s) => s.stat.name === selectedStat,
	)?.base_stat;

	const colour = STAT_COLOURS[selectedStat];

	const chartData = {
		labels: LEVELS,
		datasets:
			pokemon && baseStat !== undefined
				? [
						{
							label: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} — ${selectedStat}`,
							data: LEVELS.map((lvl) =>
								calcStatAtLevel(baseStat, lvl, selectedStat === "hp"),
							),
							borderColor: colour.border,
							backgroundColor: colour.background,
							tension: 0.3,
							pointRadius: 0,
							fill: true,
						},
					]
				: [],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { position: "top" },
			tooltip: {
				callbacks: {
					title: (items) => `Level ${items[0].label}`,
					label: (item) => ` ${selectedStat}: ${item.formattedValue}`,
				},
			},
		},
		scales: {
			x: {
				title: { display: true, text: "Level" },
				ticks: { maxTicksLimit: 20 },
			},
			y: {
				title: { display: true, text: "Stat Value" },
				beginAtZero: true,
			},
		},
	};

	// Handling of render states:

	if (isLoading) return <p className="descriptionTextTitle">Loading...</p>;
	if (!pokemon)
		return (
			<p className="descriptionTextTitle">
				Search for a Pokémon to see its stat growth
			</p>
		);

	return (
		<div className="timelineChartSelf">
			<p className="descriptionTextTitle">Poké Stats: Levels 1 to 100</p>
			<div style={{ height: "400px" }}>
				<Line data={chartData} options={options} />
			</div>
		</div>
	);
}

export default TimeLineChart;
