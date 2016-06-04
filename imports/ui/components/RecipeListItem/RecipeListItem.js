import React, { Component, PropTypes } from 'react';
import { 
	Card,
	CardHeader,
	CardActions, 
	CardText, 
	CardMedia,
	CardTitle
} from 'material-ui';

class RecipeListItem extends Component {
	render() {
		const { id, title, description, image, author } = this.props;		
		return (
			<div className="RecipeListItem">
				<Card className="CardItem">
					<CardHeader
						title={title}
					/>
					<CardMedia
						overlay={<CardTitle title={title} />}    
					>						
						<img src={image}/>
					</CardMedia>					
					<CardText>	
						{description}
					</CardText>	
					<CardTitle subtitle={'Recipe by ' + author}/>				
				</Card>
			</div>
		);		
	}
}

RecipeListItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default RecipeListItem;