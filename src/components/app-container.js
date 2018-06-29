import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppHeader from './header/app-header';

const muiTheme = createMuiTheme({});

const AppContainer = (props) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <AppHeader>Stylindex test</AppHeader>
      <div style={{ paddingTop: '64px' }}>
        { props.children }
      </div>
    </MuiThemeProvider>
  );
};

export default AppContainer;
