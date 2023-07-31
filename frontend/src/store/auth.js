// store/auth.js

export const state = () => ({
  token: null,
  username: null,
  isLoggedIn: false,
  memos: [],
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    state.isLoggedIn = !!token // トークンがある場合はログイン状態とみなす
  },
  setUsername(state, username) {
    state.username = username
  },
  //メモ保存
  save(state, newMemo) {
    state.memos.unshift(newMemo)
  },
}

export const getters = {
  getToken(state) {
    return state.token
  },
}
