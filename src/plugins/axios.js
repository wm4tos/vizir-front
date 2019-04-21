import axios from 'axios';
import { Loading, Notify } from 'quasar';

export default ({ Vue, app }) => {
  Vue.prototype.$axios = axios;
  axios.defaults.baseURL = 'http://localhost:3000/';
  axios.interceptors.request.use((req) => {
    if (app.store.getters.GetLoading) {
      Loading.show();
    }

    return req;
  }, (err) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', false);
    Promise.reject(err);
  });

  axios.interceptors.response.use(({ data }) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', false);
    switch (data.status) {
      case 200:
        return data.data;
      default:
        Notify.create({
          message: data.message,
        });
        return Promise.reject(new Error());
    }
  }, (error) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', false);

    return Promise.reject(error.response.data);
  });
};
