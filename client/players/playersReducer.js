export const GET_PLAYERS = 'PLAYERS::GET';
export const SET_PLAYERS = 'PLAYERS::SET';

const initialState = {
  loaded: false,
  loading: false,
  players: [],
}

function getPlayers(query) {
  return {
    type: GET_PLAYERS,
    payload: query,
  }
}

function setPlayers(players) {
  return {
    type: GET_PLAYERS,
    payload: players,
  }
}

export const actions = {
  getPlayers,
  setPlayers,
}

const ACTION_HANDLER = {
  [GET_PLAYERS]: (state, action) => {
    return {
      ...state,
      loading: true,
      players: [],
    }
  },
  [SET_PLAYERS]: (state, action) => {
    return {
      loaded: true,
      loaded: false,
      players: action.payload,
    }
  }
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLER[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
}