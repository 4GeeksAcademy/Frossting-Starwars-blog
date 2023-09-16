import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			<img  style={{ width: "5rem" }} src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg" class="img-thumbnail" alt="..."/>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><a className="dropdown-item" href="#">Characters</a></li>
							<li><a className="dropdown-item" href="#">Planets</a></li>
							<li><a className="dropdown-item" href="#">Vehicules</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
