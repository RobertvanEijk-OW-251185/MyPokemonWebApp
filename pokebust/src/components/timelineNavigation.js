import SearchBarTimeline from "./timelineSearch";

const STATS = [
	{ label: "Health", value: "hp" },
	{ label: "Attack", value: "attack" },
	{ label: "Defense", value: "defense" },
	{ label: "Sp. Attack", value: "special-attack" },
	{ label: "SP. Defense", value: "special-defense" },
	{ label: "Speed", value: "speed" },
];

function TimelineNav({
	search,
	onSearchChange,
	onSearch,
	isLoading,
	selectedStat,
	onStatSelect,
}) {
	return (
		<div className="timelineNavigationSection">
			<SearchBarTimeline
				value={search}
				onChange={onSearchChange}
				onSearch={onSearch}
				isLoading={isLoading}></SearchBarTimeline>
			<div className="navElements">
				{/* <button className="navButton">Health</button>
				<button className="navButton">Attack</button>
				<button className="navButton">Defense</button>
				<button className="navButton">Sp. Attack</button>
				<button className="navButton">Sp. Defense</button> */}

				{STATS.map((stat) => (
					<button
						key={stat.value}
						className={`navButton ${selectedStat === stat.value ? "active" : ""}`}
						onClick={() => onStatSelect(stat.value)}>
						{stat.label}
					</button>
				))}
			</div>
		</div>
	);
}

export default TimelineNav;
