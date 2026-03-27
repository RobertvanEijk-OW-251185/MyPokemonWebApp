// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import { Link, NavLink } from "react-router-dom";

function DashCards() {
	return (
		<div class="dashCards">
			<div class="card1">
				<div class="cardInfo">
					<h1 class="cardTitle">What is Pokébust</h1>
					<p class="cardBodyCopy">
						Discover PokéBust — your ultimate Pokémon stats hub! Explore base
						stats, compare favourites, and watch how strength grows over levels
						— all powered by PokéAPI.
					</p>
				</div>
			</div>
			<div class="card2">
				<div class="cardInfo">
					<h1 class="cardTitle">Unsure of Your Pokémon Info??</h1>
					<p class="cardBodyCopy">
						Quickly search any Pokémon and get instant stats, types, Pokédex
						info, and locations. Never guess again, explore!
					</p>
					{/* <button id="PikaButton">Search Now!</button> */}
					<button id="PikaButton">
						<NavLink className="BlackText" to="/comparison">
							Search Now!
						</NavLink>
					</button>
				</div>
			</div>
			<div class="card3">
				<div class="cardInfo">
					<h1 class="cardTitle">Comparing The Data!!</h1>
					<p class="cardBodyCopy">
						Pick two Pokémon and see their stats go head-to-head! Radar charts,
						side-by-side bars, and type match-ups make it easy to decide who’s
						stronger.
					</p>
					{/* <button id="SquirtleButton">Compare Now!</button> */}
					<button id="SquirtleButton">
						<NavLink className="WhiteText" to="/comparison">
							Compare Now!
						</NavLink>
					</button>
				</div>
			</div>
			<div class="card4">
				<div class="cardInfo">
					<h1 class="cardTitle">View Your Poké-Timeline!!</h1>
					<p class="cardBodyCopy">
						Watch your Pokémon’s power grow level by level! Follow the timeline
						of HP, Attack, Speed and more as it evolves and hits new peaks.
					</p>
					{/* <button id="BulbaButton">View Timeline!</button> */}
					<button id="BulbaButton">
						<NavLink className="WhiteText" to="/timeline">
							View Your Timeline!
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
}

export default DashCards;
