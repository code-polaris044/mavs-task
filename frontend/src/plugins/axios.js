export default function ({ $axios, store }) {
  // リクエストインターセプターを設定
  $axios.onRequest((config) => {
    // Vuexストアからトークンを取得
    const token = store.getters['auth/getToken']

    // config.headersをconsole.logで出力して確認
    console.log('HTTPヘッダー:', config.headers)

    console.log('Vuexストアのトークン:', store.getters.getToken)

    // トークンがあれば、HTTPヘッダーに付与
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  })
}
