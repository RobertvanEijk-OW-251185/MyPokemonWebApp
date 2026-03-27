import { useState } from "react";

import HeroComponentTimeline from "../components/heroTimeline";
import FooterComponent from "../components/footer";
import TimelineNav from "../components/timelineNavigation";
import TimelineChart from "../components/timelineChartOne";

function Timeline() {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [selectedStat, setSelectedStat] = useState("hp");

	// API variables:
	const [pokemon, setPokemon] = useState(null);
	const [error, setError] = useState(null);

	// Function for searching:
	const handleSearch = async () => {
		if (!search.trim()) return;
		setIsLoading(true);

		// API CALL COMES HERE (DO LATER)
		console.log("Searching for: ", search);

		setIsLoading(false);
	};

	return (
		<div className="timelinePage">
			<HeroComponentTimeline></HeroComponentTimeline>
			<div className="timelineContent">
				<TimelineNav
					search={search}
					onSearchChange={(e) => setSearch(e.target.value)}
					onSearch={handleSearch}
					isLoading={isLoading}
					selectedStat={selectedStat}
					onStatSelect={setSelectedStat}></TimelineNav>

				<div className="timelineChartSection">
					<TimelineChart></TimelineChart>
				</div>
			</div>
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Timeline;
