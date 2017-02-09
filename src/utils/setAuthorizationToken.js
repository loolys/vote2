import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    console.log('Header set');
  } else {
    delete axios.defaults.headers.common['Authorization'];
    console.log('Header not set');
  }
}
