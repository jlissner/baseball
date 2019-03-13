import { put, takeEvery } from 'redux-saga/effects';
import { GET_PLAYERS, SET_PLAYERS } from './playersReducer';
import fetch from './fetch';

export function* playersSaga(query) {
  const res = yield fetch(query);

  yield put({
    type: SET_PLAYERS,
    payload: res
  });
}

export default function* watchPlayersSaga() {
  console.log('called watch players sagas')
  yield takeEvery(GET_PLAYERS, playersSaga);
}
