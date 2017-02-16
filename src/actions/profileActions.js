import axios from 'axios';

export function getUserPolls(user) {
  return dispatch => {
    return axios.get(`/api/profile/${user}`);
  }
}

export function deletePolls(id) {
  return dispatch => {
    return axios.delete(`/api/profile/delete/${id}`);
  }
}
