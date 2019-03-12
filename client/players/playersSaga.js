import { put, takeEvery } from 'redux-saga/effects';
import { GET_PLAYERS, SET_PLAYERS } from './playersReducer';

export function* fetchPlayers() {
  yield put({
    type: SET_PLAYERS,
    payload: [1, 2, 3]
  });
}

export default function* watchFetchPlayers() {
  console.log('called watch players sagas')
  yield takeEvery(GET_PLAYERS, fetchPlayers);
}
