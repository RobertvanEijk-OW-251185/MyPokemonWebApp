import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// WHYYYYYYY (Aparently not needed, whoops)
// import Dashboard from "../pages/Dashboard";
// import Comparison from "../pages/Comparison";
// import Timeline from "../pages/Timeline";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<Navbar expand="lg" className="aliceBlue navbar-dark">
				<Container>
					<Nav className="me-auto">
						<Navbar.Brand class="navTitle" href="#home">
							<div class="navbarLogoImage" />
							PoKéBuSt
						</Navbar.Brand>
					</Nav>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<nav className="ms-auto">
							<NavLink
								className={({ isActive }) =>
									isActive ? "roboto-mono-nav active-link" : "roboto-mono-nav"
								}
								to="/">
								Dashboard
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? "roboto-mono-nav active-link" : "roboto-mono-nav"
								}
								to="/comparison">
								Comparison
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? "roboto-mono-nav active-link" : "roboto-mono-nav"
								}
								to="/timeline">
								Timeline
							</NavLink>
						</nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
