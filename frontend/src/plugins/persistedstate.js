// plugins/vuex-persistedstate.js
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default ({ store }) => {
  createPersistedState({
    key: 'storageToken',
  })(store)
}
