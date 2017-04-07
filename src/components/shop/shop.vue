<template>
  <div id="shop">
   {{bulletin}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        bulletin: ''
      };
    },
    mounted () {
      this.$http.get('/api/seller').then(response => {
        if (response.data.error === 0) {
          this.bulletin = response.data.data.bulletin;
          console.log(response);
        }
      }, response => {
        // error callback
      });
    },
    components: {},
    computed: {},
    methods: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
