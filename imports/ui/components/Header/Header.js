import React from 'react';

const Header = () => (
	<div className="Header">		
		<nav className="navMenu">
			<div className="titleApp">
				<a href="/">RecipeApp</a>
			</div>			
			<ul className="buttonsSign">
				<li><a href="#">Sign In</a></li>
				<li><a href="#">Sign Up</a></li>				
			</ul>
		</nav>
	</div>
);

export default Header;