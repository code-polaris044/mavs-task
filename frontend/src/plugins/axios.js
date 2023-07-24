export default function ({ $axios, store }) {
  // リクエストインターセプターを設定
  $axios.onRequest((config) => {
    // Vuexストアからトークンを取得
    const token = store.getters['auth/getToken']

    // ログにトークンを表示
    console.log('Token:', token)

    // トークンがあれば、HTTPヘッダーに付与
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  })
}
