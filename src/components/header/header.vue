<template>
  <div class="header">
    <div>
      <div class="content-wrapper" >
        <div class="avatar">
          <img :src="seller.avatar" width="60" height="60" alt="商家头像">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div class="supports" v-if="seller.supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
          <div class="supports-counts" v-if="seller.supports" @click="toDetail">
            <span class="count">{{seller.supports.length}}个</span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="toDetail">
        <span class="icon"></span><span class="text">
        {{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="背景图" width="100%" height="100%">
    </div>
    <div class="detail" v-show="showDetail">
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <div class="name">
            {{seller.name}}
          </div>
          <div class="stars-wrapper">
            <v-star :size="48" :full-score="5" :score="seller.score" ></v-star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="content">优惠信息</div>
            <div class="line"></div>
          </div>
          <div v-if="seller.supports" class="support">
            <div class="support-item" v-for="(item,index) in seller.supports" :key="index">
              <i class="icon" :class="classMap[item.type]"></i>
              <span class="content">{{item.description}}</span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="content">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <span class="content">{{seller.bulletin}}</span>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
  import Star from '../../components/stars/stars';
  export default {
      props: {
        seller: Object
      },
      data () {
        return {
          showDetail: false
        };
    },
    methods: {
          toDetail () {
            this.showDetail = true;
        },
      closeDetail () {
        this.showDetail = false;
      }
    },
    created () {
        this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
      },
    components: {
       'v-star': Star
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commons/stylus/mixin.styl"
  .header
    position : relative
    background: rgba(7,17,27,0.5)
    overflow :hidden
    .content-wrapper
      position: relative
      font-size : 0
      padding: 24px 12px 18px 24px
      .avatar
        display : inline-block
        vertical-align : top
        img
          border-radius :2px
      .content
        margin-left 16px
        display :inline-block
        color: rgb(255, 255, 255)
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            height:18 px
            width: 30 px
            vertical-align :top
            background-size : 30px 18px
            background-repeat: no-repeat
            bg-image("brand")
          .name
            margin-left: 4px
            font-size : 16px
            font-weight : bold
            line-height : 18px
        .description
          font-size : 12px
          line-height: 12px
          margin-bottom : 10px
        .supports
          margin-bottom :2px
          .icon
            display: inline-block
            vertical-align: top
            height:12 px
            width: 12 px
            margin-right : 4px
            background-size : 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image("decrease_1")
            &.discount
              bg-image("discount_1")
            &.guarantee
              bg-image("guarantee_1")
            &.invoice
              bg-image("invoice_1")
            &.special
              bg-image("special_1")

          .text
            font-size : 10px
            font-weight :100
        .supports-counts
          position absolute
          right : 12px
          bottom : 15px
          line-height: 24px
          font-size : 10px
          padding : 0 8px
          height : 24px
          border-radius : 14px
          background : rgba(0,0,0,0.2)
          text-align : center
          .count
              font-size : 10px
              margin-left : 3px
              vertical-align : top
          .icon-keyboard_arrow_right
              font-size : 10px
    .bulletin-wrapper
      position: relative
      display: inline-block;
      height : 28px
      width :100%
      line-height : 28px
      padding : 0 24px 0 12px
      background :rgba(7,17,27,0.2)
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      box-sizing :border-box
      color : rgb(255,255,255)
      .icon
        display :inline-block
        vertical-align :top
        width: 22px
        height : 12px
        margin-top : 8px
        bg-image("bulletin")
        background-size 22px 12px
        background-repeat : no-repeat
      .text
        font-size : 10px
        margin : 0 4px
      .icon-keyboard_arrow_right
        position : absolute
        right : 15 px
        bottom : 6px
        font-size : 10px
    .background
      position: absolute
      left : 0
      bottom: 0
      width: 100%
      height: 200%
      filter : blur(10px)
      z-index: -1
    .detail
      position :fixed
      width : 100%
      height: 100%
      top : 0
      left : 0
      z-index : 100
      overflow : auto
      background : rgba(7,17,27, 0.9)
      .detail-wrapper
        width : 100%
        min-height : 100%
        color : rgb(255,255,255)
        .detail-main
          margin-top : 64px
          padding-bottom : 64px
          .name
            font-size: 16px
            font-weight: 700
            line-height : 16px
            text-align : center
      .title
        display: flex
        width : 80%
        margin: 28px auto 24px auto
        .content
          padding: 0 12px
          font-size : 14px
          font-weight: 700
        .line
          flex :1
          position: relative
          bottom : 6px
          border-bottom: 1px solid rgba(255,255,255,0.2)
      .support
        width : 80%
        margin : 0 auto
        .support-item
          margin-top: 10px
          font-size : 0
          &:last-child
            margin-bottom:0
          .content
            font-weight : 200
            font-size : 12px
            color: rgb(255,255,255)
            line-height : 16px
            margin-left: 12px
          .icon
            display: inline-block
            vertical-align: top
            padding-right: 6px
            width: 16px
            height: 16px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bg-image("decrease_2")
            &.discount
              bg-image("discount_2")
            &.guarantee
              bg-image("guarantee_2")
            &.invoice
              bg-image("invoice_2")
            &.special
              bg-image("special_2")
      .bulletin
        width:70%
        margin : 0 auto
        .content
          padding: 0 12px
          font-size : 12px
          font-weight: 200
          line-height : 24px
      .detail-close
        position : relative
        margin : -64px auto 0 auto
        font-size : 32px
        width : 32px
        height : 32px
        clear : both
      .stars-wrapper
        margin-top : 16px
        padding: 2px 0
        text-align :center
</style>
