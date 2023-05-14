import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backgroundColor: 'blue',
  },
  getters: {
    getBackColor(state) {
      return state.backgroundColor;
    },
  },
  mutations: {
    setBackColor(state, color) {
      state.backgroundColor = color;
    },
  },
  actions: {
    setBackColor(context, color) {
      context.commit('setBackColor', color);
    },
  },
  modules: {},
});
