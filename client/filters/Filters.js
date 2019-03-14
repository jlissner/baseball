import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';

function Filters({ getPlayers }) {
  const [position, setPosition] = useState('A')

  return (
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <Select
          value={position}
          onChange={(evt) => {
            const newPosition = evt.target.value
            setPosition(newPosition);
            getPlayers({ position: newPosition });
          }}
          fullWidth
          margin="none"
          input={<FilledInput margin="none" />}
        >
          <MenuItem value={'A'}>All</MenuItem>
          <MenuItem value={'B'}>All Batters</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'1B'}>1B</MenuItem>
          <MenuItem value={'2B'}>2B</MenuItem>
          <MenuItem value={'SS'}>SS</MenuItem>
          <MenuItem value={'3B'}>3B</MenuItem>
          <MenuItem value={'OF'}>OF</MenuItem>
          <MenuItem value={'P'}>All Pitchers</MenuItem>
          <MenuItem value={'SP'}>SP</MenuItem>
          <MenuItem value={'RP'}>RP</MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export default Filters