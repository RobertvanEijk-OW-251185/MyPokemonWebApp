// Line Chart

// A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.

// <block:setup:1>
const labels = Utils.months({ count: 7 });
const data = {
	labels: labels,
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
	],
};
// </block:setup>

// <block:config:0>
const config = {
	type: "line",
	data: data,
};
// </block:config>

module.exports = {
	actions: [],
	config: config,
};
