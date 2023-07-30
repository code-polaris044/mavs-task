<template>
  <main class="sigup__container">
    <div class="sigup__inner">
      <h2 class="sigup__title">Sig Up</h2>
      <ValidationObserver ref="obs" v-slot="{ handleSubmit }">
        <form class="form_main" @submit.prevent="handleSubmit(submit)">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="username"
          >
            <div class="sigup-username">
              <input
                class="sigup-username-input"
                id="username"
                type="text"
                name="username"
                placeholder="ユーザー名"
                :value="formValue.username"
                @input="formValue.username = $event.target.value"
              />
            </div>
            <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
            name="email"
          >
            <div class="sigup-email">
              <input
                class="sigup-email-input"
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
            <div class="sigup-password">
              <input
                class="sigup-password-input"
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
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|confirmed:password"
            name="passwordConfirm"
          >
            <div class="sigup-password">
              <input
                class="sigup-password-input"
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                placeholder="パスワード確認用"
                :value="formValue.passwordConfirm"
                @input="formValue.passwordConfirm = $event.target.value"
              />
            </div>
            <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
          <button
            class="sigup__btn"
            type="submit"
            :disabled="
              !formValue.username ||
              !formValue.email ||
              !formValue.password ||
              !formValue.passwordConfirm ||
              formValue.password !== formValue.passwordConfirm
            "
          >
            新規登録
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
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      user: {},
    }
  },
  methods: {
    // 新規登録の送信処理
    async submit() {
      console.log('this.formValue', this.formValue)

      // axiosで新規登録処理
      await this.$axios.post(
        `${this.$config.apiBaseUrl}/users/usersrouter`,
        this.formValue
      )

      const responseCode = 200 // 404
      if (responseCode === 200) {
        // 成功

        // サインインページにリダイレクト
        this.$router.push('/signin')
      } else {
        // 失敗

        // トースト表示
        this.$toast.global.error({
          message: '新規登録できませんでした。もう一度お試しください',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sigup__inner {
  width: min(100% - 40px, 400px);
  margin: 0 auto;
  background: white;
  text-align: center;
  height: 360px;
  display: grid;
  place-content: center;
  gap: 20px;
}

.sigup__title {
  font-size: $fs-c-20;
  font-weight: 600;
}
.sigup-username,
.sigup-email,
.sigup-password {
  margin-bottom: 20px;
}

.sigup-username-input,
.sigup-email-input,
.sigup-password-input {
  background: hsl(252, 100%, 99%);
  padding: 8px 16px;
}
.sigup__btn {
  background: $c-accent;
  padding: 8px 16px;
  border-radius: 1.5em;
  color: white;
}
.error {
  color: #ff0000;
}
</style>
