import { Link, NavLink } from "react-router-dom";

function FooterComponent() {
	return (
		<div class="footer">
			<div class="footerTitle">
				<h3>Data provided by PokéAPI</h3>
			</div>
			<div class="footerContent">
				<div class="footerNavigation">
					<div class="footerNavTitle">
						<h4>Navigation</h4>
					</div>
					<div class="footerNavLinks">
						{/* <Link>Dashboard</Link> */}
						{/* <Link>Comparison</Link> */}
						{/* <Link>Timeline</Link> */}
						{/* <p>Dashboard</p> */}
						{/* <p>Comparison</p> */}
						{/* <p>Timeline</p> */}
						<NavLink
							className={({ isActive }) =>
								isActive ? "roboto-mono-nav" : "roboto-mono-nav"
							}
							to="/">
							Dashboard
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? "roboto-mono-nav" : "roboto-mono-nav"
							}
							to="/comparison">
							Comparison
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? "roboto-mono-nav" : "roboto-mono-nav"
							}
							to="/timeline">
							Timeline
						</NavLink>
					</div>
				</div>
				<div class="footerInfo">
					<div class="footerInfoTitle">
						<h4>PokeAPI</h4>
					</div>
					<div class="footerInfoContent">
						<p>
							A data visualization project exploring Pokémon base statistics
							using React, Node.js, and Chart.js.
						</p>
						<p>
							This project is not affiliated with Nintendo or The Pokémon
							Company.
						</p>
					</div>
				</div>
			</div>
			<div class="footerFoot">
				<p>Created by Robert Connor van Eijk 251185 2026</p>
			</div>
		</div>
	);
}

export default FooterComponent;
