<template>
  <main class="gallery__main">
    <div class="gallery__contents">
      <h2 class="gallery__title">メモ一覧</h2>
      <div class="gallery__innner">
        <button class="add__btn" type="submit">メモ追加</button>
        <div class="memo__wrap">
          <div class="memo__item">
            <div class="memo__text__wrap">
              <time datetime="2023.7.17" class="memo__date">2023.7.17</time>
              <h3 class="memo__title">タイトル...</h3>
            </div>
            <div class="memo__btn__wrap">
              <button class="memo__edit__btn" type="submit">編集</button>
              <button class="memo__delete_btn" type="submit">削除</button>
            </div>
          </div>
        </div>
        <div class="memo__wrap">
          <div class="memo__item">
            <div class="memo__text__wrap">
              <time datetime="2023.7.18" class="memo__date">2023.7.18</time>
              <h3 class="memo__title">タイトル...</h3>
            </div>
            <div class="memo__btn__wrap">
              <button class="memo__edit__btn" type="submit">編集</button>
              <button class="memo__delete_btn" type="submit">削除</button>
            </div>
          </div>
        </div>
        <div class="memo__wrap">
          <div class="memo__item">
            <div class="memo__text__wrap">
              <time datetime="2023.7.19" class="memo__date">2023.7.19</time>
              <h3 class="memo__title">タイトル...</h3>
            </div>
            <div class="memo__btn__wrap">
              <button class="memo__edit__btn" type="submit">編集</button>
              <button class="memo__delete_btn" type="submit">削除</button>
            </div>
          </div>
        </div>
        <div class="memo__wrap">
          <div class="memo__item">
            <div class="memo__text__wrap">
              <time datetime="2023.7.20" class="memo__date">2023.7.20</time>
              <h3 class="memo__title">タイトル...</h3>
            </div>
            <div class="memo__btn__wrap">
              <button class="memo__edit__btn">編集</button>
              <button class="memo__delete_btn">削除</button>
            </div>
          </div>
        </div>
      </div>
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
.gallery__contents {
  width: $common-contents-width-pc;
  margin: 0 auto 100px;
  padding-bottom: 80px;
  border-bottom: 1px solid #4de7a8;

  @include tab {
    width: $common-contents-width-tab;
  }
  .gallery__innner {
    width: min(100%, 1000px);
    margin: 0 auto;

    .add__btn {
      padding: 10px 20px;
      background: #4de7a8;
      border-radius: 10px;
      color: #726868;
      font-weight: 600;
    }
  }
  .gallery__title {
    text-align: center;
    font-size: $fs-c-20;
    font-weight: 600;
    padding-bottom: 40px;
    margin-bottom: 80px;
    border-bottom: 1px solid #4de7a8;
  }
}

.memo__wrap {
  padding: 40px 0 20px;
  @include sp {
    padding: 20px 0 20px;
  }

  .memo__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include sp {
      flex-direction: column;
      gap: 20px;
      justify-content: initial;
      align-items: initial;
    }
  }
}

.memo__text__wrap {
  display: flex;
  gap: 60px;
  font-size: $fs-normal;
  font-weight: 500;

  @include sp {
    justify-content: center;
  }
}

.memo__btn__wrap {
  display: flex;
  gap: 40px;

  @include sp {
    justify-content: center;
    gap: 20px;
  }
  .memo__edit__btn {
    padding: 6px 12px;
    background: #0000a8;
    border-radius: 15px;
    color: $c-white;
    font-weight: 600;
    font-size: 14px;
  }

  .memo__delete_btn {
    padding: 6px 12px;
    background: #e85a4d;
    border-radius: 15px;
    color: $c-white;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
