<template>
  <header id='head_top'>
    <slot name='logo'></slot>
    <slot name='search'></slot>
    <!--slot 用来调用header头部时，在组件内 <div solt="name"></div> name是在这里定义的name时，这个div就显示在solt在head组件定义的地方-->
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <span style="font-size: 100px"><<</span>
    </section>
    <!--goBack 用来显示是否出现返回路由按钮，返回上一级路由函数时$router.go(-1),这里注意的是，在head组件调用的时候，goBack 要写成go-back-->
    <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
      <svg class="user_avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <!--signinUp用来显示是否出现 登录注册/去个人中心 icon 。userInfo 开关个人中心和登录注册，这里同样需要注意在调用head组件时，signUp写成 signin-up-->
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <!--headTitle即用来显示if，也用来表示这个标题的内容，:head-title='这是一个标题'-->
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        userInfo: false
      };
    },
    props: ['goBack', 'signinUp', 'headTitle'] // goBack 表示是否显示登录/个人中心按钮 singUp表示是否已经登录 hedaTitle表示头部标题
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
