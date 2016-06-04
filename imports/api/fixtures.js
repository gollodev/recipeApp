import Recipes from './collections/recipes';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	if (Recipes.find().count() === 0) {
		console.log('Adding fixtures data...');

		Recipes.insert({
			title: 'Rusty Chicken Thighs',
			description: "I'm going to show you how to make this incredibly simple and highly effective grilled chicken marinade. It's so perfect and juicy and flavorful. It's an overall gorgeous way to grill chicken.",
			imageUrl: 'http://images.media-allrecipes.com/userphotos/720x405/1353642.jpg',
			ingredients: [
				'1 clove garlic, sliced, or more to taste',
				'2 teaspoons Asian chile pepper sauce (such as sambal oelek), or more to taste',
				'1 1/2 tablespoons maple syrup',
				'2 tablespoons soy sauce',
				'2 tablespoons mayonnaise',
				'3 tablespoons rice vinegar',
				'salt and freshly ground black pepper to taste',
				'2 pounds skinless, boneless chicken thighs',
				'1 lime, cut into 8 wedges'
			],
			directions: [
				'Mash garlic to a paste with a mortar and pestle. Mix chile pepper sauce, maple syrup, soy sauce, mayonnaise, and rice vinegar into garlic until marinade is thoroughly combined.',
				'Transfer chicken thighs to a large flat container (such as a baking dish) and pour marinade over chicken; stir until chicken is coated. Cover dish with plastic wrap and refrigerate about 3 hours; if preferred, let stand about 30 minutes at room temperature. Unwrap dish and sprinkle with salt.',
				'Preheat charcoal grill to high heat.',
				'Place chicken thighs onto the hot grill with smooth sides down. Cook until chicken shows grill marks, about 3 minutes. Turn chicken over and cook until other side shows grill marks, about 5 minutes. Continue to cook, moving them occasionally and turning over every 2 minutes, until meat is no longer pink inside and the thighs are golden brown, 10 to 12 minutes.',
				'Transfer chicken to a platter, let rest for 5 minutes, and serve garnished with lime wedges.'
			],
			author: 'admin'
		});

		Recipes.insert({
			title: 'Tater Tot Taco Casserole',
			description: "Just what the grandkids ordered. Tater tots, Mexican food, and cheese! This is one of those meals that you can throw together with ingredients you would normally have on hand. Great for pot luck or a quick meal for unexpected company. Some kids don't like onion or garlic; these can be omitted.",
			imageUrl: 'http://images.media-allrecipes.com/userphotos/720x405/1095717.jpg',
			ingredients: [
				'1 pound ground beef',
				'1 small onion, diced',
				'1 clove garlic, minced',
				'1 (1 ounce) packet taco seasoning mix',
				'1 (16 ounce) bag frozen Mexican-style corn',
				'1 (12 ounce) can black beans, rinsed and drained',
				'1 (12 ounce) bag shredded Mexican cheese blend',
				'1 (16 ounce) package frozen tater tots',
				'1 (12 fluid ounce) can enchilada sauce'
			],
			directions: [
				'Preheat an oven to 375 degrees F (190 degrees C). Prepare a 9x13-inch baking dish with cooking spray.',
				'Cook the ground beef in a skillet over medium heat until completely browned, 5 to 7 minutes. Add the onion, garlic, taco seasoning mix, frozen Mexican-style corn, and black beans to the ground beef; cook and stir another 10 minutes. Set aside to cool slightly.',
				'Combine the ground beef mixture in a large bowl with about 3/4 of the Mexican cheese blend and the tater tots; stir to combine.',
				'Pour about 1/3 of the enchilada sauce into the bottom of the prepared baking dish. Add the tater tot mixture to the baking dish; lightly pat the mixture down into a solid, even layer. Pour the remaining enchilada sauce over the tater tot layer.',
				'Bake in the preheated oven for 40 minutes. Sprinkle the remaining Mexican cheese over the casserole and return to oven until the cheese is melted and bubbly, about 5 minutes more.'

			],
			author: 'admin'
		});

		Recipes.insert({
			title: 'Buffalo Chicken Pasta Salad',
			description: "For anyone who likes Buffalo wings, this is a great change of pace from normal pasta salad. Really popular as a side dish for a barbeque or just about any gathering you can think of. You can substitute or add many different vegetables with this recipe.",
			imageUrl: 'http://images.media-allrecipes.com/userphotos/720x405/657345.jpg',
			ingredients: [
				'1 (16 ounce) package uncooked rotini pasta',
				'1/2 cup mayonnaise',
				'1 cup chunky blue cheese dressing',
				'1/2 cup buffalo wing sauce',
				'1 teaspoon salt',
				'1/2 teaspoon black pepper',
				'1 pound frozen cooked chicken strips, defrosted and diced',
				'1/2 cup red bell pepper, diced',
				'1/2 cup green bell pepper, diced',
				'1 cup red onion, diced'
			],
			directions: [
				'Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, stir in the rotini, and return to a boil. Cook uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 8 minutes. Drain well in a colander set in the sink.',
				'Stir together the mayonnaise, blue cheese dressing, buffalo wing sauce, salt and pepper in a large bowl. Add the chicken, bell peppers, red onion, and cooked pasta and toss to coat with the dressing. Cover and chill at least 1 hour in the refrigerator before serving.'
			],
			author: 'admin'
		});
	}
});

	








