import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    <React.Fragment>
      <Filters />
      {
        _map(players.players, (player, i) => (
          <Player
            key={player.id}
            {...player}
            nextPlayer={players.players[i+1]}
          />
        ))
      }
    </React.Fragment>
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