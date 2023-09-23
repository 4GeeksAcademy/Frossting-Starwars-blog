import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar-light bg-black mb-3">
			<div className="navBar">
				<Link to="/">
					<img style={{ width: "5rem" }} src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg" className="img-thumbnail rounded-circle mx-auto" alt="..." />
				</Link>
				<div className="favorites">
					<Favorites/>
				</div>
			</div>
		</nav>
	);
};
