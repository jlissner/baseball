import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Players from '../players/PlayersContainer';
import Filters from '../filters/FilterContainer';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 1400,
    margin: '0 auto',
  }
})

function Home({ classes }) {
  return (
    <Grid className={classes.root} container spacing={24}>
      {/*<Grid item x={12}>
        <Typography variant="h2">Players</Typography>
      </Grid>*/}
      <Grid item xs={12}>
        <Filters />
      </Grid>
      <Grid item xs={12}>
        <Players />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Home);
