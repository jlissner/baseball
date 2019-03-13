import axios from 'axios';
import _reduce from 'lodash/reduce';

async function fetchPlayers(query) {
  const formmatedQuery = _reduce(query, (res, val, key) => (`${res}&${key}=${val}`), '');

  return await axios.get(`/players?${formmatedQuery.substring(1, formmatedQuery.length)}`);
}

export default fetchPlayers