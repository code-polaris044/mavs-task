// plugins/vuex-persistedstate.js

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    /* オプションを指定 */
    // storage: window.sessionStorage, // sessionStorageを使用する場合
    // key: 'my-app', // キー名を指定する場合
    // paths: ['auth'], // 特定のモジュールだけ永続化する場合
  })(store)
}
