import { Meteor } from 'meteor/meteor';
import Recipes from './collections/recipes';

Meteor.publish('recipes.list', function () {	
	return Recipes.find();
})

