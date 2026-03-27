// Bar Chart

// A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

// <block:setup:1>

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const labels = ["Health", "Attack", "Defense", "Speed", "Sp. Atk", "Sp. Def"];

const data = {
	labels,
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
			],
			borderWidth: 1,
		},
		{
			label: "My Second Dataset",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
			],

			borderWidth: 1,
		},
	],
};
// </block:setup>

// <block:config:0>
const options = {
	responsive: true,
	maintainAspectRatio: false,
	indexAxis: "y",
	plugins: {
		legend: { position: "top" },
		// title: { display: true, text: "Poke Stats" },
	},
};
// </block:config>

// module.exports = {
// 	actions: [],
// 	config: config,
// };

function BarChart() {
	return (
		<div
			style={{
				width: "100%",
				margin: "0 auto",
			}}>
			<p className="descriptionTextTitle">PokeStats</p>
			<div style={{ height: "400px" }}>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
}

export default BarChart;
