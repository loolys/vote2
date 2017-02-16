import axios from 'axios';

export function getUserPolls(user) {
  return dispatch => {
    return axios.get(`/api/profile/${user}`);
  }
}
