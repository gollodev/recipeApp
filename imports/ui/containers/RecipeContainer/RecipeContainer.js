import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Recipes from '../../../api/collections/recipes';
import Header from '../../components/Header/Header.js';

class RecipeContainer extends Component {

	render() {
		console.log(this.props.recipes);		
		return (
			<div>
				<Header/>				
			</div>			
		);
	}
}

RecipeContainer.propTypes = {
	recipes: PropTypes.array.isRequired
}

const mapCollectionsToProps = () => {
	return {
		recipes: Recipes.find().fetch()
	};
}

export default createContainer(mapCollectionsToProps, RecipeContainer);