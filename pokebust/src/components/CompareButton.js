// import "../componentStyling/pokeGrid.css";

// function CompareButton() {
// 	return (
// 		<button class="comparebtn" id="CompareNowBTN">
// 			<div class="compareNow">COMPARE NOW</div>
// 		</button>
// 	);
// }

// export default CompareButton;

import "../componentStyling/pokeGrid.css";

function CompareButton({ onClick, style }) {
	return (
		<button className="comparebtn" onClick={onClick} style={style}>
			<div className="compareNow">COMPARE NOW</div>
		</button>
	);
}

export default CompareButton;
