<template>
  <div class="stars" :class="starType">
    <span v-for="(className,index) in classNames" :class="className" class="star-item" :key="index" ></span>
  </div>

</template>

<script type="application/javascript">
  // 为其他组件提供star的组件,只需要提供分数和需要的尺寸即可
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    props: {
      score: Number,
      size: Number,
      fullScore: Number
    },
    computed: {
      // 计算尺寸大小，给定类名
      starType () {
        return 'star-' + this.size;
      },
      classNames () {
        const classArr = [];
        const score = Math.floor(this.score * 2) / 2;
        const hasDecimal = score % 1 !== 0;
        const intScore = Math.floor(score);
        for (let i = 0; i < intScore; i++) {
          classArr.push(CLS_ON);
        }
        if (hasDecimal) {
          classArr.push(CLS_HALF);
        }
        while (classArr.length < this.fullScore) {
          classArr.push(CLS_OFF);
        }

        return classArr;
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commons/stylus/index.styl"

  .stars
    font-size : 0
    .star-item
      display : inline-block
      background-repeat : no-repeat
    &.star-48
      .star-item
        width : 20px
        height: 20px
        background-size : 20px 20px
        margin-right : 24px
        &.on
          bg-image("star48_on")
        &.half
          bg-image("star48_half")
        &.off
          bg-image("star48_off")
    &.star-36
      .star-item
        width :15px
        height:15px
        background-size: 15px 15px
        margin-right : 6px
        &.on
          bg-image("star36_on")
        &.half
          bg-image("star36_half")
        &.off
          bg-image("star36_off")
    &.star-24
      .star-item
        width :10px
        height:10px
        background-size: 10px 10px
        margin-right : 3px
        &.on
          bg-image("star24_on")
        &.half
          bg-image("star24_half")
        &.off
          bg-image("star24_off")
</style>
