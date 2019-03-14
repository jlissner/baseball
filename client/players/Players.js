import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import _map from 'lodash/map';
import Player from './Player'
import Filters from '../filters/FilterContainer'

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

  return (
    <Grid container spacing={24}>
      {
        _map(players.players, (player, i) => (
          <Grid key={player.id} item xs={12}>
            <Player
              {...player}
              nextPlayer={players.players[i+1]}
            />
          </Grid>
        ))
      }
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