import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    { props.children }
  </MuiThemeProvider>
);

export default App;