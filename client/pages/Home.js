import React from 'react';
import Players from '../players/PlayersContainer';
import Filters from '../filters/FilterContainer';

function Home() {
  return (
    <React.Fragment>
      <Filters />
      <Players />
    </React.Fragment>
  )
}

export default Home;
