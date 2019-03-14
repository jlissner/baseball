const _findIndex = require('lodash/findIndex');
const _forEach = require('lodash/forEach');
const _pick = require('lodash/pick');
const _map = require('lodash/map');
const _round = require('lodash/round');
const _transform = require('lodash/transform');
const _cloneDeep = require('lodash/cloneDeep');

function combinePlayerData(playersBySeason) {
  const combined = _transform(playersBySeason, (res, { players, season }) => {
    _forEach(players, player => {
      const existingPlayerId = _findIndex(res, { id: player.id });

      if (existingPlayerId > -1) {
        const existingPlayer = res[existingPlayerId];

        existingPlayer.seasons.push({season, stats: player.stats});

        _transform(player.stats, (cur, val, key) => {
          cur[key] = cur[key] || 0;
          cur[key] = _round(cur[key] + val, 3);
        }, existingPlayer.averageStats)
      } else {
        res.push({
          ..._pick(player, ['id', 'position']),
          name: player.name.full,
          seasons: [{season, stats: player.stats}],
          averageStats: _cloneDeep(player.stats),
        })
      }
    })
  }, [])

  return _map(combined, player => ({
    ...player,
    averageStats: _transform(player.averageStats, (res, val, key) => {
      res[key] = val / player.seasons.length
    }, {})
  }))
}

module.exports = combinePlayerData