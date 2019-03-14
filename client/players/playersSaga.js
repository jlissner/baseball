import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PLAYERS, SET_PLAYERS } from './playersReducer';
import fetchPlayers from './fetchPlayers';

export function* playersSaga({ payload }) {
  const res = yield call(fetchPlayers, payload);
  const players = yield res.data

  yield put({
    type: SET_PLAYERS,
    payload: players
  });
}

export default function* watchPlayersSaga() {
  console.log('called watch players sagas')
  yield takeEvery(GET_PLAYERS, playersSaga);
}
