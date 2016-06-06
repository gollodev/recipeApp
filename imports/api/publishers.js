import { Meteor } from 'meteor/meteor';
import Recipes from './collections/recipes';

Meteor.publish('recipes.list', () => {	
	return Recipes.find();
});

