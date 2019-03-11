const axios = require('axios');
const auth = require('../auth/auth');
const express = require('express');
const { baseUrl, leagues } = require('../yahoo/config');
const parsePlayerData = require('../yahoo/parsePlayerData');
const { parseString } = require('xml2js');
const _get = require('lodash/get');
const _map = require('lodash/map');
const _sortBy = require('lodash/sortBy');
const _flatten = require('lodash/flatten');
const router = express.Router();

function buildQueryString(opts) {
  const {
    league,
    position,
    sort = 'OR',
    start = '0',
    count = '25'
  } = opts;

  return `${baseUrl}league/${league}/players;sort=${sort};start=${start};count=${count}${
    position ? `;position=${position}` : ''};status=A/stats`
}

async function getCurrentSeason(opts) {
  const curSeasonIndex = leagues.length - 1;
  const curSeasonRaw = await axios({
    method: 'get',
    withCredentials: true,
    url: buildQueryString(opts),
    // url: `${baseUrl}users;use_login=1/games`,
    headers: { Authorization: `Bearer ${auth.token()}`}
  });

  return await parsePlayerData(curSeasonRaw);
}



router.get('/', async (req, res, next) => {
  try {
    const curSeasonIndex = leagues.length - 1;
    const curSeason = await getCurrentSeason({league: leagues[curSeasonIndex].id, ...req.query});
    const playerIds = _map(curSeason.players, p => p.id);

    const seasonsPromises = _flatten(_map(leagues, ({ id }) => {
      const playerKeys = _map(playerIds, pId => {
        const leagueId = id.split('.')[0]

        return `${leagueId}.p.${pId}`;
      });

      return _map(playerKeys, pKey => axios({
        method: 'get',
        withCredentials: true,
        url: `${baseUrl}league/${id}/players;sort=OR;player_keys=${pKey}/stats`,
        // url: `${baseUrl}users;use_login=1/games`,
        headers: { Authorization: `Bearer ${auth.token()}`}
      }).catch(() => {}))
    }))
    
    const seasons = await Promise.all(seasonsPromises)
    const parsedPlayerDataPromises = _map(seasons.filter(Boolean), season => parsePlayerData(season))
    const parsedPlayerData = await Promise.all(parsedPlayerDataPromises);
    const groupedPlayerData = _map(leagues, ({ season }) => {
      return {
        season,
        players: _flatten(_map(parsedPlayerData.filter(s => s.season === season), sp => sp.players)),
      }
    })

    res.send(_sortBy(groupedPlayerData, ({ season }) => season));
  } catch (err) {
    console.error(err)
    res.send(err);
  }
});

module.exports = router;
