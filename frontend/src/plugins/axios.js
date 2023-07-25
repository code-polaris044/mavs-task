async function setupAxiosInterceptor($axios, token) {
  // リクエストインターセプターを設定
  $axios.onRequest(async (config) => {
    // トークンがあれば、HTTPヘッダーに付与
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      console.log('tokenがnullです')
    }

    console.log('HTTPヘッダー:', config.headers)

    return config
  })
}

export default function ({ $axios, store }) {
  // Vuexゲッターを監視
  store.watch(
    (state, getters) => getters['auth/getToken'],
    (token) => {
      console.log('Vuexストアのトークンが更新されました:', token)
      setupAxiosInterceptor($axios, token) // トークンが更新された後にリクエストインターセプターを設定
    }
  )

  // 初期状態でトークンを取得してリクエストインターセプターを設定
  const initialToken = store.getters['auth/getToken']
  setupAxiosInterceptor($axios, initialToken)

  // トークンをログに出力
  console.log('初回のVuexストアのトークン:', initialToken)
}
