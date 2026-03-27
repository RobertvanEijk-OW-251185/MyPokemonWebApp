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

const data = {
	labels: ["HP", "Def.", "Sp.Def.", "Spd.", "Sp.Atk.", "Atk."],
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 59, 90, 81, 56, 55],
			fill: true,
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgb(255, 99, 132)",
			pointBackgroundColor: "rgb(255, 99, 132)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgb(255, 99, 132)",
		},
		{
			label: "My Second Dataset",
			data: [28, 48, 40, 19, 96, 27],
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
// </block:setup>

// <block:config:0>
const config = {
	type: "radar",
	data: data,
	options: {
		elements: {
			line: {
				borderWidth: 3,
			},
		},
	},
};
// </block:config>

// module.exports = {
// 	actions: [],
// 	config: config,
// };

function RadarChart() {
	return (
		<div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
			<p className="descriptionTextTitle">PokeStats</p>
			<Radar data={data} />
		</div>
	);
}

export default RadarChart;

// export default RadarChart;
