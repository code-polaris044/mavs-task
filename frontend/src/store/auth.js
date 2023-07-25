// store/auth.js

export const state = () => ({
  token: null,
  username: null,
  isLoggedIn: false,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    console.log('トークンがセットされました:', token)
    state.isLoggedIn = !!token // トークンがある場合はログイン状態とみなす
  },
  setUsername(state, username) {
    state.username = username
  },
}

export const getters = {
  getToken(state) {
    return state.token
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  },
}
