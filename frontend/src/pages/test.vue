<template>
  <div>
    <h1>User Information</h1>
    <p>Name: {{ userInfo.name }}</p>
    <p>Email: {{ userInfo.email }}</p>
  </div>
</template>

<script>
// 必要なインポートを追加する
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mapGettersを使ってVuex StoreからuserInfoを取得する
    ...mapGetters(['getToken', 'getUsername']),
    userInfo() {
      // ユーザー情報をオブジェクトとして返す
      return {
        name: this.getUsername,
        email: this.getToken,
      }
    },
  },
  created() {
    // もし非同期でユーザー情報を取得する場合は、このcreatedフックでデータを取得する処理を記述する
    // 例: this.$store.dispatch('fetchUserInfo')
  },
}
</script>
