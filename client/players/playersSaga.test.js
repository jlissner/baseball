import { call, put } from 'redux-saga/effects';
import { playersSaga } from './playersSaga';
import { SET_PLAYERS } from './playersReducer';
import fetchPlayers from './fetchPlayers';


jest.mock('./fetchPlayers', () => jest.fn().mockResolvedValue({ data: { test: 'players' }}));

describe('Players Saga', () => {
  it('fetches the player and puts them in state', async () => {
    const gen = playersSaga('query');
    const payload = { test: 'players' };
    const expectedAction = {
      type: SET_PLAYERS,
      payload
    }

    expect(gen.next().value).toEqual(call(fetchPlayers, 'query'));
    expect(gen.next({ data: { test: 'players' }}).value).toEqual(payload);
    expect(gen.next(payload).value).toEqual(put(expectedAction));
  });
})