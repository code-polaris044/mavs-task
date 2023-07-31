<template>
  <main class="single__main">
    <div class="single__contents">
      <h3 class="single__title">
        <input type="text" class="single__input" placeholder="メモタイトル" />
      </h3>
      <div class="single__teaxt">
        <textarea
          class="single__textarea"
          placeholder="ご入力ください。"
        ></textarea>
      </div>
      <div class="single__btn__wrap">
        <button class="keepp__btn" type="submit" @click="save">保存</button>
        <button class="back__btn" type="submit" @click="gallery">一覧へ</button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    save() {
      let memo = {
        title: 'メモのタイトルです',
        content: 'メモの内容です',
      }
      this.$store.commit('save', memo)
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
