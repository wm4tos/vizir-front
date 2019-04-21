import axios from 'axios';

export default ({ Vue }) => {
  Vue.prototype.$axios = axios;
  axios.defaults.baseURL = 'http://localhost:3000/';
};
