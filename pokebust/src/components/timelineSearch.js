import "../componentStyling/timeline.css";

export const SearchBarTimeline = ({ value, onChange }) => {
	return (
		<div className="input-wrapper-timeline">
			<input
				className="searchFieldTimeline"
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBarTimeline;
