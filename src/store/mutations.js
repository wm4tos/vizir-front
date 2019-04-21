import Vue from 'vue';

export function SAVE_ORIGIN(state, origin) {
  Vue.set(state, 'origin', origin);
}

export function SAVE_LOADING(state, loading) {
  Vue.set(state, 'loading', loading);
}

export function SAVE_TIME(state, time) {
  Vue.set(state, 'time', time);
}

export function SAVE_PLAN(state, plan) {
  Vue.set(state, 'plan', plan);
}
