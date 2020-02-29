<template>
  <div>
    <v-header/>
    <div class="tab">
      <div class="tab-item">
        <router-link class="tab-link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/ratings">评论</router-link>
        </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 40px
    width: 100%
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      &>a
        color: red
        display :block
        font-size: 24px

</style>
