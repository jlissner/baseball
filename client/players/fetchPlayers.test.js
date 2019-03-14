import fetchPlayers from './fetchPlayers';
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(),
}))

describe('fetching players', () => {
  const basePath = '/players';

  it('should fetch the players with the correct query', async () => {
    const query = {sort: 'OR', position: 'P'};
    const expectedQueryString = '?sort=OR&position=P';
    const fullPath = `${basePath}${expectedQueryString}`;

    await fetchPlayers(query);

    expect(axios.get).toHaveBeenCalledWith(fullPath);
  });

  it('should omit position when position is a', async () => {
    const query = {sort: 'OR', position: 'A'};
    const expectedQueryString = '?sort=OR';
    const fullPath = `${basePath}${expectedQueryString}`;

    await fetchPlayers(query);

    expect(axios.get).toHaveBeenCalledWith(fullPath);
  });
})