import combinePlayerData from './combinePlayerData';
import _cloneDeep from 'lodash/cloneDeep';

describe('Combine Player Data', () => {
  const separateData = [{
    season: 2018,
    players: [{
      id:'8861',
      name:{
        full:'Mike Trout',
        first:'Mike',
        last:'Trout',
      },
      playerKey:'378.p.8861',
      teamKey:'mlb.t.3',
      team:'Los Angeles Angels',
      teamAbbr:'LAA',
      number:'27',
      position:'OF',
      image:'https://s.yimg.com/iu/api/res/1.2/TiL15zoPAufEchyllGJ_gA--~B/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03252018/8861.png',
      positionType: 'B',
      stats:{
        h: 147, // 8
        ab: 471,
        avg: .313, // 60
        r: 101, // 7
        '2b': 24, // 10
        '3b': 4, // 11
        hr: 39, // 12
        rbi: 79, // 13
        sf: 4, // 15
        sb: 24, // 16
        bb: 122, // 18
        ibb: 25, // 19
        gidp: 5, // 22
        cyc: 0, // 64
        total: 768,
      }
    }]
  }, {
    season: 2017,
    players: [{
      id:'8861',
      name:{
        full:'Mike Trout',
        first:'Mike',
        last:'Trout',
      },
      playerKey:'378.p.8861',
      teamKey:'mlb.t.3',
      team:'Los Angeles Angels',
      teamAbbr:'LAA',
      number:'27',
      position:'OF,2B',
      image:'https://s.yimg.com/iu/api/res/1.2/TiL15zoPAufEchyllGJ_gA--~B/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03252018/8861.png',
      positionType: 'B',
      stats:{
        h: 149,
        ab: 473,
        avg: .315,
        r: 103,
        '2b': 26,
        '3b': 6,
        hr: 41,
        rbi: 81,
        sf: 6,
        sb: 26,
        bb: 124,
        ibb: 27,
        gidp: 7,
        cyc: 2,
        total: 770,
      }
    }]
  }]
  const aggrigatedData = [{
    name: 'Mike Trout',
    id: '8861',
    seasons: [{
      season: 2018,
      stats: {
        h: 147, // 8
        ab: 471,
        avg: .313, // 60
        r: 101, // 7
        '2b': 24, // 10
        '3b': 4, // 11
        hr: 39, // 12
        rbi: 79, // 13
        sf: 4, // 15
        sb: 24, // 16
        bb: 122, // 18
        ibb: 25, // 19
        gidp: 5, // 22
        cyc: 0, // 64
        total: 768,
      }
    }, {
      season: 2017,
      stats: {
        h: 149,
        ab: 473,
        avg: .315,
        r: 103,
        '2b': 26,
        '3b': 6,
        hr: 41,
        rbi: 81,
        sf: 6,
        sb: 26,
        bb: 124,
        ibb: 27,
        gidp: 7,
        cyc: 2,
        total: 770,
      }
    }],
    position: 'OF',
    statsTotals: {
      h: 296,
      ab: 944,
      avg: .628,
      r: 204,
      '2b': 50,
      '3b': 10,
      hr: 80,
      rbi: 160,
      sf: 10,
      sb: 50,
      bb: 246,
      ibb: 52,
      gidp: 12,
      cyc: 2,
      total: 1538,
      }
  }]
  it('should aggrigate all the player data', () => {
    const expected = aggrigatedData;
    const actual = combinePlayerData(separateData);

    expect(actual).toEqual(expected);
  })

  it('should handle adding of null values', () => {
    const separateDataWithNull = _cloneDeep(separateData);
    separateDataWithNull[1].players[0].stats.gidp = null

    const expectedWithNull = _cloneDeep(aggrigatedData);
    expectedWithNull[0].statsTotals.gidp = 5;
    expectedWithNull[0].seasons[1].stats.gidp = null;

    const actual = combinePlayerData(separateDataWithNull);

    expect(actual).toEqual(expectedWithNull);
  })
})