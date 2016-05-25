import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import RecipeContainer from '../imports/ui/containers/RecipeContainer.js';
 
Meteor.startup(() => {
  render(<RecipeContainer />, document.getElementById('app'));
});