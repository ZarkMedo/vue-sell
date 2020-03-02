<template>
<div class="flex">
  <div class="line"></div>
  <div class="text" >{{content}}</div>
  <div class="line"></div>
</div>
</template>

<script type="application/javascript">
  export default {
    props: {
      content: {
        type: String
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .flex
    display: flex
    width : 80%
    margin : 24px auto 22px auto
    .line
      flex : 1
      position: relative
      bottom : 10px
      border-bottom: 1px solid rgba(255,255,255,0.2)
    .text
      padding : 0 12px
      font-size :24px
      font-weight :700
      box-sizing : border-box
</style>
