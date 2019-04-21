import Vue from 'vue';

export function SAVE_ORIGIN(state, origin) { // eslint-disable-line
  Vue.set(state, 'origin', origin);
}
