<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item border-t-1px ">
        <router-link class="tab-link" to="/goods" >商品</router-link>
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

  const OKERR = 0;
  export default {
    // 返回数据使用，是一个方法
    data () {
     return {
       seller: {}
     };
    },
    created () {
      // 创建后，发起请求，获取数据
      this.$http.get('/api/seller').then((res) => {
       const body = res.body;
       if (body.errno === OKERR) {
         this.seller = body.data;
       }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./commons/stylus"
  .tab
    display: flex
    height: 40px
    width: 100%
    line-height: 40px
    border-b-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      &>a
        color: rgb(77, 85, 93)
        display :block
        font-size: 24px
        &.active
          color: rgb(240, 20, 20)

</style>
