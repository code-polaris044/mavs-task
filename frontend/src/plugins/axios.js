export default function ({ $axios, store }) {
  // リクエストインターセプターを設定
  $axios.onRequest((config) => {
    //ローカルストレージからトークンを取得
    const token = store.state.auth.token

    // config.headersをconsole.logで出力して確認
    console.log('HTTPヘッダー:', config.headers)

    console.log('Vuexストアのトークン:', token)

    // トークンがあれば、HTTPヘッダーに付与
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      console.log('トークンはありません')
    }

    return config
  })
}
