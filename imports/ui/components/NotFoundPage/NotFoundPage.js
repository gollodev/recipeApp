import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => (
	<div className="NotFoundPage">
		<p>Not Found Page :(</p>	
		<Link to="/">Back to Home!</Link>	
	</div>	
);

export default NotFoundPage;