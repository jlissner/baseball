const parsePlayerData = require('./parsePlayerData');
const goodData = {
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
      avg: .312, // 60
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
};
const badData = {
  data: `<?xml version="1.0" encoding="UTF-8"?>
    <fantasy_content xml:lang="en-US" yahoo:uri="http://fantasysports.yahooapis.com/fantasy/v2/league/378.l.47915/players;count=1;sort=OR;start=0/stats" time="214.44392204285ms" copyright="Data provided by Yahoo! and STATS, LLC" refresh_rate="60" xmlns:yahoo="http://www.yahooapis.com/v1/base.rng" xmlns="http://fantasysports.yahooapis.com/fantasy/v2/base.rng">
     <league>
      <league_key>378.l.47915</league_key>
      <league_id>47915</league_id>
      <name>Furious French Toast</name>
      <url>https://baseball.fantasysports.yahoo.com/archive/mlb/2018/47915</url>
      <logo_url>https://ct.yimg.com/cy/1707/26666032964_d6f5f0ab8a_192sq.jpg</logo_url>
      <draft_status>postdraft</draft_status>
      <num_teams>10</num_teams>
      <edit_key>2019-03-11</edit_key>
      <weekly_deadline/>
      <league_update_timestamp>1537773318</league_update_timestamp>
      <scoring_type>headpoint</scoring_type>
      <league_type>private</league_type>
      <renew>370_8238</renew>
      <renewed>388_4251</renewed>
      <iris_group_chat_id>6WHCOPPQYNBFVCNPPVTFI7OAI4</iris_group_chat_id>
      <allow_add_to_dl_extra_pos>0</allow_add_to_dl_extra_pos>
      <is_pro_league>0</is_pro_league>
      <is_cash_league>0</is_cash_league>
      <current_week>24</current_week>
      <start_week>1</start_week>
      <start_date>2018-03-29</start_date>
      <end_week>24</end_week>
      <end_date>2018-09-23</end_date>
      <is_finished>1</is_finished>
      <game_code>mlb</game_code>
      <season>2018</season>
      <players count="1">
       <player>
        <player_key>378.p.8861</player_key>
        <player_id>8861</player_id>
        <name>
         <full>Mike Trout</full>
         <first>Mike</first>
         <last>Trout</last>
         <ascii_first>Mike</ascii_first>
         <ascii_last>Trout</ascii_last>
        </name>
        <editorial_player_key>mlb.p.8861</editorial_player_key>
        <editorial_team_key>mlb.t.3</editorial_team_key>
        <editorial_team_full_name>Los Angeles Angels</editorial_team_full_name>
        <editorial_team_abbr>LAA</editorial_team_abbr>
        <uniform_number>27</uniform_number>
        <display_position>OF</display_position>
        <headshot>
         <url>https://s.yimg.com/iu/api/res/1.2/TiL15zoPAufEchyllGJ_gA--~B/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03252018/8861.png</url>
         <size>small</size>
        </headshot>
        <image_url>https://s.yimg.com/iu/api/res/1.2/TiL15zoPAufEchyllGJ_gA--~B/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03252018/8861.png</image_url>
        <is_undroppable>0</is_undroppable>
        <position_type>B</position_type>
        <eligible_positions>
         <position>OF</position>
         <position>Util</position>
        </eligible_positions>
        <has_player_notes>1</has_player_notes>
        <player_notes_last_timestamp>1552009320</player_notes_last_timestamp>
        <player_stats>
         <coverage_type>season</coverage_type>
         <season>2018</season>
         <stats>
          <stat>
           <stat_id>60</stat_id>
           <value>147/471</value>
          </stat>
          <stat>
           <stat_id>7</stat_id>
           <value>101</value>
          </stat>
          <stat>
           <stat_id>8</stat_id>
           <value>147</value>
          </stat>
          <stat>
           <stat_id>10</stat_id>
           <value>24</value>
          </stat>
          <stat>
           <stat_id>11</stat_id>
           <value>4</value>
          </stat>
          <stat>
           <stat_id>12</stat_id>
           <value>39</value>
          </stat>
          <stat>
           <stat_id>13</stat_id>
           <value>79</value>
          </stat>
          <stat>
           <stat_id>15</stat_id>
           <value>4</value>
          </stat>
          <stat>
           <stat_id>16</stat_id>
           <value>24</value>
          </stat>
          <stat>
           <stat_id>18</stat_id>
           <value>122</value>
          </stat>
          <stat>
           <stat_id>19</stat_id>
           <value>25</value>
          </stat>
          <stat>
           <stat_id>22</stat_id>
           <value>5</value>
          </stat>
          <stat>
           <stat_id>64</stat_id>
           <value>0</value>
          </stat>
         </stats>
        </player_stats>
        <player_points>
         <coverage_type>season</coverage_type>
         <season>2018</season>
         <total>768</total>
        </player_points>
       </player>
      </players>
     </league>
    </fantasy_content>

    <!-- fanos442.sports.bf1.yahoo.com Sun Mar 10 22:36:44 UTC 2019 -->`
}

describe('parse player data', () => {
  it('should parse the player data', async () => {
    const actualParsedData = await parsePlayerData(badData);

    expect(actualParsedData).toEqual(goodData);
  })
})