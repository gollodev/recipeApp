import React from 'react';
import { Link } from 'react-router';

const Header = () => (
	<div className="Header">		
		<nav className="navMenu">
			<div className="titleApp">
				<Link to="">RecipeApp</Link>
			</div>			
			<ul className="buttonsSign">
				<li><a href="#">Sign In</a></li>
				<li><a href="#">Sign Up</a></li>				
			</ul>
		</nav>
	</div>
);

export default Header;