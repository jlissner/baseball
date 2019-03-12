import { all } from 'redux-saga/effects';
import playersSaga from './players/playersSaga';

export default function* sagas() {
  yield all([
    playersSaga()
  ])
}
