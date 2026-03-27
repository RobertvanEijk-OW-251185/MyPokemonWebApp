import HeroComponentTimeline from "../components/heroTimeline";
import FooterComponent from "../components/footer";
import TimelineNav from "../components/timelineNavigation";
import TimelineChart from "../components/timelineChartOne";

function Timeline() {
	return (
		<div className="timelinePage">
			<HeroComponentTimeline></HeroComponentTimeline>
			<div className="timelineContent">
				<TimelineNav></TimelineNav>

				<div className="timelineChartSection">
					<TimelineChart></TimelineChart>
				</div>
			</div>
			<FooterComponent></FooterComponent>
		</div>
	);
}

export default Timeline;
