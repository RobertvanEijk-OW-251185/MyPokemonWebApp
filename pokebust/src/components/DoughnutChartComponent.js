// Doughnut and Pie Charts

// Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
// They are excellent at showing the relational proportions between data.
// Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their cutout. This equates to what portion of the inner should be cut out. This defaults to 0 for pie charts, and '50%' for doughnuts.
// They are also registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.

// :::: tabs
// ::: tab Doughnut

// <block:setup:1>
const data = {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [300, 50, 100],
			backgroundColor: [
				"rgb(255, 99, 132)", // Set colors for chart sections here
				"rgb(54, 162, 235)", // Set colors for chart sections here
				"rgb(255, 205, 86)", // Set colors for chart sections here
			],
			hoverOffset: 4, // Hover effect displaying the data...
		},
	],
};
// </block:setup>

// <block:config:0>
const config = {
	type: "doughnut",
	data: data,
};
// </block:config>

module.exports = {
	actions: [],
	config: config,
};
