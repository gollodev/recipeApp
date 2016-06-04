import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Recipes from '../../../api/collections/recipes';
import Header from '../../components/Header/Header.js';
import RecipeList from '../../components/RecipeList/RecipeList';

class RecipeContainer extends Component {

	render() {				
		return (
			<div>
				<Header/>				
				<RecipeList recipes={this.props.recipes}/>
			</div>			
		);
	}
}

const mapCollectionsToProps = () => {
	return {
		recipes: Recipes.find().fetch()
	};
}

export default createContainer(mapCollectionsToProps, RecipeContainer);