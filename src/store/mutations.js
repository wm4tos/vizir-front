import Vue from 'vue';

export function SAVE_ORIGIN(state, origin) {
  Vue.set(state, 'origin', origin);
}

export function SAVE_LOADING(state, loading) {
  Vue.set(state, 'loading', loading);
}
