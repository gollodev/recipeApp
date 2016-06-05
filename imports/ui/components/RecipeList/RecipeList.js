import React, { Component, PropTypes } from 'react';
import RecipeListItem from '../RecipeListItem/RecipeListItem';

class RecipeList  extends Component {
	render() {		
		const { recipes } = this.props;		
		return (			
			<div className="RecipeList">
				{ 
					recipes.map(recipe =>
						<RecipeListItem
							key={recipe._id} 
							id={recipe._id}
							title={recipe.title}
							description={recipe.description}
							image={recipe.imageUrl}
							author={recipe.author}
						/>
					)			
				}
			</div>
		);
	}
}

RecipeList.propTypes = {
	recipes: PropTypes.array.isRequired
}

export default RecipeList;