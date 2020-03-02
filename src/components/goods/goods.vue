<template>
  <div class="goods">
    <transition name="haha">
      <div class="box"  v-if="isShow"></div>
    </transition>
      <button @click="isShow=!isShow">开关</button>
  </div>

</template>

<script type="application/javascript">
  export default {
    data () {
      return {
       isShow: true
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    .box
      position: relative
      width: 200px
      height: 200px
      right: 50%
      background: #000
      margin 50% auto
      text-align : center
      opacity : 1
      &.haha-enter, &.haha-leave-active
        opacity : 0
      &.haha-enter-active, &.haha-leave-active
        transition : all 3s
</style>
