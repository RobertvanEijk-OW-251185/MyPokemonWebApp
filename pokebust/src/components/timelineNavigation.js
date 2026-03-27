import SearchBarTimeline from "./timelineSearch";

function TimelineNav() {
	return (
		<div className="timelineNavigationSection">
			{/* <div className="searchField">Search...</div> */}

			<SearchBarTimeline></SearchBarTimeline>
			<div className="navElements">
				<button className="navButton">Health</button>
				<button className="navButton">Attack</button>
				<button className="navButton">Defense</button>
				<button className="navButton">Sp. Attack</button>
				<button className="navButton">Sp. Defense</button>
			</div>
		</div>
	);
}

export default TimelineNav;
