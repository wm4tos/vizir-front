export function SET_ORIGIN(context, origin) {
  context.commit('SAVE_ORIGIN', origin);
}

export function SET_LOADING(context, loading) {
  context.commit('SAVE_LOADING', loading);
}

export function SET_TIME(context, time) {
  context.commit('SAVE_TIME', time);
}

export function SET_PLAN(context, plan) {
  context.commit('SAVE_PLAN', plan);
}
