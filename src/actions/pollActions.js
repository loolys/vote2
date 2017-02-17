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

export function voteForOption(poll) {
  return dispatch => {
    return axios.post('/api/polls/vote', poll);
  }
}

export function addOption(option) {
  return dispatch => {
    return axios.post('/api/polls/addOption', option);
  }
}
