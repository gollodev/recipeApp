import { Meteor } from 'meteor/meteor';
import Recipes from './collections/recipes';

Meteor.publish('recipes.list', () => {	
	return Recipes.find();
});

Meteor.publish('recipes.detail', (id) => {
	return Recipes.findOne(id);
});

