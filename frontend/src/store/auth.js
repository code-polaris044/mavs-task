// store/auth.js

export const state = () => ({
  token: null,
  username: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    console.log('トークンがセットされました:', token)
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
