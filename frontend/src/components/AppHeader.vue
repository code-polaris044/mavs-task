<template>
  <!-- アプリケーションの共通ヘッダー -->
  <header :class="['header', { 'header--logged-in': isLogin }]">
    <div class="header__wrap">
      <h1 class="title">
        <nuxt-link to="/">メモアプリ</nuxt-link>
      </h1>
      <div>
        <div v-if="isLogin">
          <p>{{ username }}</p>
          <button type="button" @click="logout">ログアウト</button>
        </div>
        <div v-else>
          <nuxt-link to="/signin" class="link__signIn">サインイン</nuxt-link>
          <nuxt-link to="/signup" class="link__signUp">新規登録</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    // Tokenの有無でログインしているかどうかを判断
    isLogin() {
      return !!this.$store.state.auth.token
    },
    username() {
      return this.$store.state.auth.username
    },
  },
  methods: {
    // ログアウト処理
    logout() {
      // store/auth.jsのactionsのlogoutを実行
      this.$store.commit('auth/setToken', null)
      this.$store.commit('auth/setUsername', null)

      // Topページにリダイレクト
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  margin-bottom: 100px;

  @include tab {
    margin-bottom: 50px;
  }

  .header__wrap {
    width: $common-contents-width-pc;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
}

.nuxt-link-active {
  color: white;
  font-size: $fs-c-24;
}

.header--logged-in {
  background-color: $c-accent;
  color: white;
}

.link__signIn,
.link__signUp {
  color: white;
  font-size: $fs-c-18;
}
</style>
