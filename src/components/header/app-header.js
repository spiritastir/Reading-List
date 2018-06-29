import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const AppHeader = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          { props.children }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
