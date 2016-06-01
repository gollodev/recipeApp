import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => (
  <div className="AppContainer">
  	<MuiThemeProvider muiTheme={getMuiTheme()}>
    { props.children }
  	</MuiThemeProvider>
  </div>  
);

export default App;