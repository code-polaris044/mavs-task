// // plugins/axios.js

// function setupAxiosInterceptor($axios, token) {
//   // リクエストインターセプターを設定
//   $axios.onRequest(async (config) => {
//     // トークンがあれば、HTTPヘッダーに付与
//     if (token) {
//       config.headers.common['Authorization'] = `Bearer ${token}`
//     }

//     // config.headersをconsole.logで出力して確認
//     console.log('HTTPヘッダー:', config.headers)
//     console.log('Vuexストアのトークンが更新されました:', token)

//     return config
//   })
// }

// export default function ({ $axios, store }) {
//   // Vuexゲッターを監視
//   store.watch(
//     (state, getters) => getters['auth/getToken'],
//     (token) => {
//       console.log('Vuexストアのトークンが更新されました:', token)
//       setupAxiosInterceptor($axios, token) // トークンが更新された後にリクエストインターセプターを設定
//     }
//   )

//   // 初期状態でリクエストインターセプターを設定
//   const initialToken = store.getters['auth/getToken']
//   setupAxiosInterceptor($axios, initialToken)
// }
