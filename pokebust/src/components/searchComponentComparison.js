// import { useState } from "react";

// import "../componentStyling/pokeGrid.css";

// export const SearchBar = () => {
// 	return (
// 		<div className="input-wrapper">
// 			<input
// 				class="searchField"
// 				id="searchPokemon1"
// 				placeholder="Search..."></input>
// 			<div className="searchResults"></div>
// 		</div>
// 	);
// };

// export default SearchBar;

import "../componentStyling/pokeGrid.css";

export const SearchBar = ({ value, onChange }) => {
	return (
		<div className="input-wrapper">
			<input
				className="searchField"
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBar;
