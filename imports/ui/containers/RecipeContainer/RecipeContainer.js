import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Recipes from '../../../api/collections/recipes';
import Header from '../../components/Header/Header.js';
import RecipeList from '../../components/RecipeList/RecipeList';
import Footer from '../../components/Footer/Footer';
import { Meteor } from 'meteor/meteor';

class RecipeContainer extends Component {

	render() {				
		return (
			<div className="RecipeContainer">
				<Header/>				
				<RecipeList recipes={this.props.recipes}/>
				<Footer/>
			</div>			
		);
	}
}

export default createContainer(() => {	
	Meteor.subscribe('recipes.list');
	return {
		recipes: Recipes.find().fetch()
	};
}, RecipeContainer);