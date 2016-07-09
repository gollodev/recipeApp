import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Recipes from './collections/recipes';

Meteor.methods({
	'recipes.getDetail' (id) {
		check(id, String);
		Recipes.findOne({_id: id});
	}
});