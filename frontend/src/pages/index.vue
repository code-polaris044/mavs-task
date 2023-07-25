<template>
  <main class="index__main">
    <div class="index__contents">
      <figure class="index__img__wrap">
        <img src="~/assets/img/memo.jpg" alt="memo" class="memo__img" />
        <figcaption class="index__text__wrap">
          <h3 class="index__leadText">save inspiration</h3>
        </figcaption>
      </figure>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.index__contents {
  width: $common-contents-width-pc;
  margin: 0 auto;

  @include tab {
    width: $common-contents-width-tab;
  }

  .index__img__wrap {
    width: $index-img-width;
    margin: 0 auto;
    display: flex;
    position: relative;

    @include tab {
      flex-direction: column-reverse;
    }
    .memo__img {
      width: 100%;
      height: auto;
      object-fit: cover;
      aspect-ratio: 3/2;
    }

    .index__text__wrap {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -100px;
      display: inline-block;
      padding: 10px 20px;
      background-color: rgba($c-assort, 0.1); /* 背景色 */
      border-right-color: rgba($c-assort, 0.2);
      border-bottom-color: rgba($c-assort, 0.2);
      -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
      backdrop-filter: blur(20px);
      box-shadow: 0 5px 20px rgba($c-assort, 0.5);

      @include tab {
        top: 50%;
        right: initial;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .index__leadText {
        font-size: $fs-c-64;
        color: #fff;
        font-weight: 400;
      }
    }
  }
}
</style>
