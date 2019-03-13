import { put } from 'redux-saga/effects';
import { playersSaga } from './playersSaga';
import { SET_PLAYERS } from './playersReducer';


jest.mock('./fetch', () => jest.fn().mockResolvedValue({ test: 'players' }));

describe('Players Saga', () => {
  it('fetches the player and puts them in state', async () => {
    const gen = playersSaga();
    const payload = { test: 'players' };
    const expectedAction = {
      type: SET_PLAYERS,
      payload
    }

    const firstVal = await gen.next().value;
    const secondVal = gen.next(payload).value;

    expect(firstVal).toEqual(payload);
    expect(secondVal).toEqual(put(expectedAction));
  });
})