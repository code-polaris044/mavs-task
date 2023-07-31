<template>
  <div :class="['layout', { 'layout--logged-in': isLoggedIn }]">
    <AppHeader class="layout__header" />
    <Nuxt class="layout__main" />
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    },
  },
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #004691,
    #0069da,
    #daecff
  ); /*グラデーションを定義*/
  background-size: 200% 200%; /*サイズを大きくひきのばす*/
  animation: bggradient 20s ease infinite;
}

@keyframes bggradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.layout--logged-in {
  background: #e0e0e0;
  animation: initial;
  width: 100%;
  height: 100vh;
}
</style>
