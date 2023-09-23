import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img style={{ width: "5rem" }} src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg" class="img-thumbnail" alt="..." />
				</Link>
				<div className="ml-auto">
					<Favorites/>
				</div>
			</div>
		</nav>
	);
};
