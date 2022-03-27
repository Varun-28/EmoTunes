import React from "react";
import Logo from "../assets/emotunes-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Stylesheets/Navbar.css";
import { useTheme } from "../Context/theme-context";

function Navbar() {
	const { theme, themeHandler } = useTheme();

	return (
		<div className="navbar p-4">
			<nav className="flex items-center">
				<Link to="/" className="mr-auto">
					<img className="logo-img w-40" src={Logo} alt="logo-for-app" />
				</Link>
				<ul className="flex items-center gap-x-2 mr-2 text-sm md:text-lg md:mr-6 md:gap-x-4">
					<li className="nav-link border-solid border-2 rounded-3xl border-current px-4 py-2">
						<Link to="/login">Login</Link>
					</li>
					<li
						className="nav-link border-solid border-2 rounded-3xl border-transparent px-4 py-2"
						style={{
							backgroundColor: `${theme.mode.secondaryColor}`,
							color: `${theme.mode.bgColor}`,
						}}
					>
						<Link to="/signup">SignUp</Link>
					</li>
				</ul>
				<button className="btn-theme text-lg md:text-xl" onClick={themeHandler}>
					<FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
				</button>
			</nav>
		</div>
	);
}

export { Navbar };
