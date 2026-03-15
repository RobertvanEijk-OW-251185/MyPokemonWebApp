// import { useState } from "react";

// import "../componentStyling/pokeGrid.css";

// export const SearchBar2 = () => {
// 	return (
// 		<div className="input-wrapper2">
// 			<input
// 				class="searchField"
// 				id="searchPokemon2"
// 				placeholder="Search..."></input>
// 			<div className="searchResults"></div>
// 		</div>
// 	);
// };

// export default SearchBar2;

import "../componentStyling/pokeGrid.css";

export const SearchBar2 = ({ value, onChange }) => {
	return (
		<div className="input-wrapper2">
			<input
				className="searchField"
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBar2;
