import axios from 'axios';

export function createPoll(poll) {
  return dispatch => {
    return axios.post('api/polls', poll);
  }
}

export function getPolls() {
  return dispatch => {
    return axios.get('api/polls/polls');
  }
}

export function getSpecificPoll(id) {
  return dispatch => {
    return axios.get(`/api/polls/test/${id}`);
  }
}
