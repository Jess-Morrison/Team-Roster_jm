// create a getTeamPlayers promise
import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// Get team players

const getTeamPlayers = (teamId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}players.json?orderBy="teamId"&equalTo="${teamId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTeamPlayers;
