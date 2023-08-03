<template>
  <main class="single__main">
    <div class="single__contents">
      <h3 class="single__title">
        <input
          type="text"
          class="single__input"
          placeholder="メモタイトル"
          v-model="title"
        />
      </h3>
      <div class="single__teaxt">
        <textarea
          class="single__textarea"
          placeholder="ご入力ください。"
          v-model="content"
        ></textarea>
      </div>
      <div class="single__btn__wrap">
        <button
          class="keepp__btn"
          type="submit"
          @click="save"
          :disabled="!title || !content"
        >
          保存
        </button>
        <button class="back__btn" type="submit" @click="gallery">一覧へ</button>
      </div>
    </div>
  </main>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'MemoForm',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  //   computed: {
  //     ...mapGetters(['getToken']),
  //   },
  methods: {
    async save() {
      //   const token = this.getToken
      let memo = {
        title: this.title,
        content: this.content,
      }
      console.log('memo', memo)
      //   , token
      // 新規登録の送信処理
      try {
        // axiosで新規登録処理
        const response = await this.$axios.post(
          `${this.$config.apiBaseUrl}/articles/createArticle`,
          memo // memoを送信する
        )

        if (response.status === 200) {
          // 成功
          console.log(response)

          // サインインページにリダイレクト
          this.$router.push('/gallery')
        } else {
          // 失敗

          // トースト表示
          this.$toast.global.error({
            message: 'メモ登録できませんでした。もう一度お試しください',
          })
        }
      } catch (error) {
        // エラーハンドリング
        console.error('メモ登録エラー:', error)

        // トースト表示
        this.$toast.global.error({
          message: 'メモ登録できませんでした。もう一度お試しください',
        })
      }
    },
    gallery() {
      this.$router.push('/gallery')
    },
  },
}
</script>
<style lang="scss" scoped>
.single__contents {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;

  @include tab {
    width: $common-contents-width-tab;
  }

  .single__title {
    text-align: center;
    font-size: $fs-c-20;
    font-weight: 600;
    padding-bottom: 40px;
    margin-bottom: 80px;
    border-bottom: 1px solid #4de7a8;
  }

  .single__teaxt {
    line-height: 1.6;
    letter-spacing: 0.125em;
    padding: 0 16px;
    margin-bottom: 60px;
  }

  .single__btn__wrap {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  .back__btn {
    padding: 8px 16px;
    background: #726868;
    border-radius: 20px;
    color: $c-white;
    font-weight: 600;
    font-size: 14px;
  }

  .keepp__btn {
    padding: 8px 16px;
    background: #4de7a8;
    border-radius: 15px;
    color: $c-white;
    font-weight: 600;
    font-size: 14px;
  }
}

.single__input {
  border: 1px solid $c-text;
  border-radius: 5px;
  width: 100%;
}

.single__textarea {
  border: 1px solid $c-text;
  border-radius: 5px;
  height: 400px;
  width: 100%;
  resize: none;
  padding: 10px;
}
</style>

<!-- export default {
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
      console.log(`${this.$config.apiBaseUrl}/users/createUser`)

      try {
        // axiosで新規登録処理
        const response = await this.$axios.post(
          `${this.$config.apiBaseUrl}/users/createUser`,
          this.formValue
        )

        if (response.status === 200) {
          // 成功
          console.log(response)

          // サインインページにリダイレクト
          this.$router.push('/signin')
        } else {
          // 失敗

          // トースト表示
          this.$toast.global.error({
            message: '新規登録できませんでした。もう一度お試しください',
          })
        }
      } catch (error) {
        // エラーハンドリング
        console.error('新規登録エラー:', error)

        // トースト表示
        this.$toast.global.error({
          message: '新規登録できませんでした。もう一度お試しください',
        })
      }
    },
  },
} -->
