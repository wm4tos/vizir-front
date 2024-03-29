import axios from 'axios';
import { Loading, Notify } from 'quasar';

export default ({ Vue, app }) => {
  Vue.prototype.$axios = axios;
  axios.defaults.baseURL = 'http://localhost:3000/';
  axios.interceptors.request.use((req) => {
    const loading = app.store.getters.GetLoading;
    if (loading !== {}) {
      Loading.show(loading);
    }

    return req;
  }, (err) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', {});
    Promise.reject(err);
  });

  axios.interceptors.response.use(({ data }) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', {});
    switch (data.status) {
      case 200:
        if (data.message) {
          Notify.create({
            icon: 'check',
            message: data.message,
            color: 'light-green',
          });
        }
        return data.data;
      default:
        Notify.create({
          icon: 'warning',
          message: data.message,
          color: 'red-9',
        });
        return Promise.reject(new Error());
    }
  }, (error) => {
    Loading.hide();
    app.store.dispatch('SET_LOADING', {});

    return Promise.reject(error.response.data);
  });
};
