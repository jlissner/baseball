import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './pages/Home'

const styles = (theme) => ({
  '@global': {
    'html': {
      background: theme.palette.grey[300],
      minHeight: '100%',
      paddingTop: 56,
    }
  }
})

function Layout() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">Furious French Toast</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  )
}

export default withStyles(styles)(Layout);