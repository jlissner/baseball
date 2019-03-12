import React from 'react';
import Button from '@material-ui/core/Button';

function Players({ players, getPlayers }) {
  return (
    <div>
      Hello Players: {players.players}
      <Button onClick={getPlayers}>get players</Button>
    </div>
  )
}

export default Players