import Vue from 'vue';
import Vuex from 'vuex';

// import system from './modules/system';
// import system_list from './modules/system_list';
// import inventory_history from './modules/inventory_history';
// import network_settings from './modules/network_settings';
// import reboot from './modules/reboot';

Vue.use(Vuex);

const store = () => new Vuex.Store ({

  state: {
    is_created: false,
  },

  mutations: {
    SET_is_created (state, value) {
      console.log('1');
      state.is_created = value;
    },
  },

  getters: {
    GET_is_created (state) {
      console.log(state.is_created);
      return state.is_created
    }
  },

  modules: {
    // system,
    // system_list,
    // inventory_history,
    // network_settings,
    // reboot,
  }
});

export default store;