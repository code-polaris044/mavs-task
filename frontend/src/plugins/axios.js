// plugins/axios.js

function setupAxiosInterceptor($axios, token) {
  // リクエストインターセプターを設定
  $axios.onRequest(async (config) => {
    // トークンがあれば、HTTPヘッダーに付与
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    console.log('Vuexストアのトークンが更新されました:', token)

    // config.headersをconsole.logで出力して確認
    console.log('HTTPヘッダー:', config.headers)

    return config
  })
}

export default function ({ $axios, store }) {
  const token = store.getters['auth/getToken'] // ゲッターからトークンを取得

  // リクエストインターセプターを設定
  setupAxiosInterceptor($axios, token)

  // トークンをログに出力
  console.log('初回のVuexストアのトークン:', token)
}
