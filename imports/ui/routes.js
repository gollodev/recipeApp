import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import AppContainer from './containers/AppContainer/AppContainer';
import RecipeContainer from './containers/RecipeContainer/RecipeContainer';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import RecipeDetailContainer from './containers/RecipeDetailContainer/RecipeDetailContainer';


const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={RecipeContainer} />      
      <Route path="/:recipe" component={RecipeDetailContainer} />
      <Route path="*" component={NotFoundPage}/>      
    </Route>
  </Router>
);

export default renderRoutes;