const _map = require('lodash/map');
const _transform = require('lodash/transform');
const _keys = require('lodash/keys');
const _get = require('lodash/get');
const _pick = require('lodash/pick');
const _find = require('lodash/find');
const _round = require('lodash/round');
const _parseInt = require('lodash/parseInt')
const { parseString } = require('xml2js');

const oldKeyToNewKey = {
  player_id: 'id',
  name: 'name',
  player_key: 'playerKey',
  editorial_team_key: 'teamKey',
  editorial_team_full_name: 'team',
  editorial_team_abbr: 'teamAbbr',
  uniform_number: 'number',
  image_url: 'image',
  display_position: 'position',
  position_type: 'positionType',
  player_stats: 'stats',
  full: 'full',
  first: 'first',
  last: 'last'
}

const statsMap = {
  '60': 'avg',
  '7': 'r',
  '8': 'h',
  '10': '2b',
  '11': '3b',
  '12': 'hr',
  '13': 'rbi',
  '15': 'sf',
  '16': 'sb',
  '18': 'bb',
  '19': 'ibb',
  '22': 'gidp',
  '64': 'cyc',
}

function parseStats(stats, _total) {
  const total = _parseInt(_get(_total, '[0].total[0]', 0), 10);
  
  return _transform(statsMap, (res, val, key) => {
    const stat = _find(stats.stats[0].stat, (s) => s.stat_id[0] === key);
  
    if (stat) {
      if (val === 'avg') {
        const parts = stat.value[0].split('/');
        const num = _parseInt(parts[0], 10);
        const den = _parseInt(parts[1], 10);
        const percent = _round(num/den, 3);

        res[val] = percent;
        res.ab = den;
      } else {
        res[val] = _parseInt(stat.value[0], 10);
      }
    }
  }, { total })
}

function cleanData(playerData) {
  const keysToKeep = _keys(oldKeyToNewKey);
  const playerDataWithKeysToKeep = _pick(playerData, keysToKeep);

  return _transform(playerDataWithKeysToKeep, (res, _val, _key) => {
    const key = oldKeyToNewKey[_key] || _key;
    const val = _val instanceof Array ? _val[0] : _val;
    const recurse = typeof val === 'object';

    if(_key === 'player_stats') {
      res[key] = parseStats(val, playerData.player_points);
    } else {
      res[key] =  recurse ? cleanData(val) : val;
    }
  }, {})
}

function parseApiResponse({ data }) {
  const leaguePath = 'fantasy_content.league.0'
  const seasonPath = `${leaguePath}.season.0`;
  const playersPath = `${leaguePath}.players.0.player`;

  return new Promise((res) => {
    parseString(data, (err, parsedData) => {
      const season = _parseInt(_get(parsedData, seasonPath), 10);
      const players = _get(parsedData, playersPath);
      const cleanedPlayers = _map(players, cleanData);
      
      res({
        season,
        players: cleanedPlayers,
      })
    })
  })

}

module.exports = parseApiResponse;