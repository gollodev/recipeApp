import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Recipes = new Mongo.Collection('recipes');

Recipes.schema = new SimpleSchema({
	title: { 
		type: String, 
		label: 'Title', 
		max: 100
	},
	description: {
		type: String,
		label: 'Description',
		min: 20,
		max: 600
	},
	imageUrl: {
		type: String,
		label: 'Image URL'
	},
	ingredients: { 
		type: [String],
		label: 'Ingredients'
	},
	directions: { 
		type: [String]		
	},
	createdAt: { 
		type: Date, 
		defaultValue: new Date() 
	},
	author: { 
		type: String
	}
});

export default Recipes;

