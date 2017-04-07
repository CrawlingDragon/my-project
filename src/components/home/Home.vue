<template>
  <div>
    <headTop :signin-up="'home'" :head-title="loginWay? '登录':'密码登录'" :go-back="true">
      <span slot="logo" class="head_logo" @click="reload">ele.em</span>
    </headTop>
    <router-link to="/shop">
      <p>点击进入商铺</p>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  import headTop from '../header/header.vue';
  export default{
    data () {
      return {
        loginWay: true
      };
    },
    components: {
      headTop
    },
    methods: {
      reload () {
        window.location.reload();
      }
    }
  };
</script>
