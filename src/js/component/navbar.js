import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="box">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
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
