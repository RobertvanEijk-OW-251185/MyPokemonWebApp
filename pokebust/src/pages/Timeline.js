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
		setError(null);
		setPokemon(null);

		// API CALL COMES HERE (DO LATER)
		console.log("Searching for: ", search);

		// API Call:

		try {
			const res = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase().trim()}`,
			);

			if (!res.ok) throw new Error("Not Found...");
			const data = await res.json();
			setPokemon(data);
		} catch {
			setError("Pokémon Not Found :(");
		} finally {
			setIsLoading(false);
		}

		// End of search handling

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
					onStatSelect={setSelectedStat}
					pokemon={pokemon}
					error={error}></TimelineNav>

				<div className="timelineChartSection">
					<TimelineChart
						pokemon={pokemon}
						selectedStat={selectedStat}
						isLoading={isLoading}></TimelineChart>
				</div>
			</div>
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Timeline;
