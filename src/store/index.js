// import Vuex from 'vuex';
import actions from './action';
import state from './state';
import mutations from './mutation';
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';

Vue.use(Vuex);

const store = {
      state: state,
      mutations: mutations,
      actions: actions,
      getters: getters
};

export default new Vuex.Store(store);
