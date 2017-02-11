import axios from 'axios';

export function createPoll(poll) {
  return dispatch => {
    return axios.post('api/polls', poll);
  }
}
