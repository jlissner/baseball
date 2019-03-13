import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import _map from 'lodash/map';

function Players({ players, getPlayers }) {
  const { loaded, loading } = players;

  useEffect(() => {
    if (!loaded && !loading) {
      getPlayers();
    }
  })

  if (loading) {
    return <CircularProgress />
  }

  console.log(players.players)

  return (
    <Grid container>
      {_map(players.players, (season, i) => ( console.log('here', season.season) || 
        <Grid item key={season.season}>
          <h3>{season.season}</h3>
          <List>
            {
              _map(season.players, (player) => (
                <ListItem key={player.id}>
                  <ListItemText
                    primary={`${player.name.full} - ${player.position}`}
                    secondary={`${player.stats.total} - ${player.stats.h}/${player.stats.ab} (${player.stats.avg})`}
                  />
                </ListItem>
              ))
            }
          </List>
        </Grid>
      ))}
    </Grid>
  )
}

export default Players

/*
name
position
team

points
point-difference
*/