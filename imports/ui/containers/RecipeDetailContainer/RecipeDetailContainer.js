import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Recipes from '../../../api/collections/recipes';

class RecipeDetailContainer extends Component {	

	render() {		
		console.log(this.props);

		return (			
			<div className="RecipeDetailContainer">
			<Header/>
			<span>Ready!</span>
			<Footer/>
			</div>
		);		
	}
}

export default createContainer(({params}) => {
	const { recipeId } = params;
	Meteor.subscribe('recipes.detail', recipeId);	
	const recipe = Recipes.findOne(recipeId);

	return {			  
		detailRecipe: recipe
	};

}, RecipeDetailContainer);