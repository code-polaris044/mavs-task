// plugins/axios.js

function setupAxiosInterceptor($axios, token) {
  // リクエストインターセプターを設定
  $axios.onRequest((config) => {
    // トークンがあれば、HTTPヘッダーに付与

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      console.log('nullです')
    }

    return config
  })
}

export default function ({ $axios, store }) {
  // Vuexゲッターを監視
  store.watch(
    (state, getters) => getters['auth/getToken'],
    (token) => {
      setupAxiosInterceptor($axios, token) // トークンが更新された後にリクエストインターセプターを設定
    }
  )

  // 初回のトークンをログに出力
  const initialToken = store.getters['auth/getToken']
}
