<template>
  <main class="sigin__container">
    <div class="sigin__inner">
      <h2 class="sigin__title">Sigin In</h2>
      <ValidationObserver ref="obs" v-slot="{ handleSubmit }">
        <form class="form_main" @submit.prevent="handleSubmit(submit)">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
            name="email"
          >
            <div class="sigin-email">
              <input
                class="sigin-email-input"
                id="email"
                type="email"
                name="email"
                placeholder="メールアドレス"
                :value="formValue.email"
                @input="formValue.email = $event.target.value"
              />
            </div>
            <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="password"
          >
            <div class="sigin-password">
              <input
                class="sigin-password-input"
                id="password"
                type="password"
                name="password"
                placeholder="パスワード"
                :value="formValue.password"
                @input="formValue.password = $event.target.value"
              />
            </div>
            <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
          <button
            class="sigin__btn"
            type="submit"
            :disabled="!formValue.email || !formValue.password"
          >
            ログイン
          </button>
        </form>
      </ValidationObserver>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formValue: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // サインインの送信処理
    async submit() {
      console.log('送信テスト')
      try {
        const response = await this.$axios.$post(
          `${this.$config.apiBaseUrl}/auth/signin`,
          this.formValue
        )
        console.log('サインインAPI結果', response)

        // トークンの有無でログインできたか判断
        const hasToken = !!response.token
        if (hasToken) {
          // 成功

          // Vuexストアにユーザー情報保存
          this.$store.commit('auth/setToken', response.token)
          this.$store.commit('auth/setUsername', response.email)

          // HTTPヘッダーを確認
          this.$router.push('/gallery')
        } else {
          // 失敗

          // トースト表示
          this.$toast.global.error({
            message: 'メールアドレスまたはパスワードが間違っています',
          })
          // 入力項目リセット
          this.formValue = {
            email: '',
            password: '',
          }
        }
      } catch (error) {
        // エラーハンドリング
        console.error('サインインエラー:', error)
        this.$toast.global.error({
          message: 'サインインに失敗しました',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sigin__inner {
  width: min(100% - 40px, 400px);
  margin: 0 auto;
  background: white;
  text-align: center;
  height: 300px;
  display: grid;
  place-content: center;
  gap: 20px;
}
.sigin__title {
  font-size: $fs-c-20;
  font-weight: 600;
}

.sigin__btn {
  background: $c-accent;
  padding: 8px 16px;
  border-radius: 1.5em;
  color: white;
}

.sigin-email {
  margin-bottom: 20px;

  .sigin-email-input {
    padding: 8px 16px;
  }
}

.sigin-password {
  margin-bottom: 20px;
  .sigin-password-input {
    padding: 8px 16px;
  }
}
.error {
  color: #ff0000;
}
</style>
