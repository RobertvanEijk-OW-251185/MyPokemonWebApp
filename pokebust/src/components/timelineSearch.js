import "../componentStyling/timeline.css";

export const SearchBarTimeline = ({ value, onChange, onSearch, isLoading }) => {
	return (
		<div className="input-wrapper-timeline">
			<input
				className="searchFieldTimeline"
				placeholder="Search..."
				value={value}
				onChange={onChange}
				onKeyDown={(e) => e.key === "Enter" && onSearch()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default SearchBarTimeline;
