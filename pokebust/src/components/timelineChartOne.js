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
			tension: 0.3, // ← curve smoothness, 0 = straight lines
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

function TimeLineChart() {
	return (
		<div className="timelineChartSelf">
			<p className="descriptionTextTitle">PokeStats</p>
			<div style={{ height: "400px" }}>
				<Line data={data} options={options} />
			</div>
		</div>
	);
}

export default TimeLineChart;
