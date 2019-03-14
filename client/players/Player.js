import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import _map from 'lodash/map';
import _round from 'lodash/round';

function PictcherHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Year</TableCell>
        <TableCell>Total</TableCell>
        <TableCell>ERA</TableCell>
        <TableCell>IP</TableCell>
        <TableCell>ER</TableCell>
        <TableCell>K</TableCell>
        <TableCell>QS</TableCell>
        <TableCell>CG</TableCell>
        <TableCell>W</TableCell>
        <TableCell>SV</TableCell>
        <TableCell>L</TableCell>
      </TableRow>
    </TableHead>
  )
}

function PitcherBody({season, stats}) {
  const era = _round((stats.er / stats.ip) * 9, 2)
  return (
    <TableRow>
      <TableCell>{season}</TableCell>
      <TableCell>{stats.total}</TableCell>
      <TableCell>{era}</TableCell>
      <TableCell>{stats.ip}</TableCell>
      <TableCell>{stats.er}</TableCell>
      <TableCell>{stats.k}</TableCell>
      <TableCell>{stats.qs}</TableCell>
      <TableCell>{stats.cg}</TableCell>
      <TableCell>{stats.w}</TableCell>
      <TableCell>{stats.sv}</TableCell>
      <TableCell>{stats.l}</TableCell>
    </TableRow>
  )
}

function BatterHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Year</TableCell>
        <TableCell>Total</TableCell>
        <TableCell>AVG</TableCell>
        <TableCell>H</TableCell>
        <TableCell>RBI</TableCell>
        <TableCell>2B</TableCell>
        <TableCell>3B</TableCell>
        <TableCell>HR</TableCell>
        <TableCell>BB</TableCell>
        <TableCell>IBB</TableCell>
      </TableRow>
    </TableHead>
  )
}

function BatterBody({season, stats}) {
  return (
    <TableRow>
      <TableCell>{season}</TableCell>
      <TableCell>{stats.total}</TableCell>
      <TableCell>{stats.avg}</TableCell>
      <TableCell>{stats.h}</TableCell>
      <TableCell>{stats.rbi}</TableCell>
      <TableCell>{stats['2b']}</TableCell>
      <TableCell>{stats['3b']}</TableCell>
      <TableCell>{stats.hr}</TableCell>
      <TableCell>{stats.bb}</TableCell>
      <TableCell>{stats.ibb}</TableCell>
    </TableRow>
  )
}

export default function Player({
  name,
  averageStats: {
    h,
    ab,
    avg,
    ip,
    er,
  },
  seasons
}) {
  const isPitcher = Boolean(ip);

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
      </CardContent>
      <Table>
        {
          isPitcher
          ? <PictcherHead />
          : <BatterHead />
        }
        <TableBody>
          {
            isPitcher
            ? _map(seasons, season => <PitcherBody key={season.season} {...season}/>)
            : _map(seasons, season => <BatterBody key={season.season} {...season}/>)
          }
        </TableBody>
      </Table>
    </Card>
  )
}