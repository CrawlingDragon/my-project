<template>
  <div>
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" ref="stylesheet/scss">
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
