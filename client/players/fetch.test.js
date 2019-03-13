import fetch from './fetch';
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

    await fetch(query);

    expect(axios.get).toHaveBeenCalledWith(fullPath);
  })
})