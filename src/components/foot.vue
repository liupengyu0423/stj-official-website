<template>
  <footer>
    <div class="quickly">
      <p class="quickly_title">快速通道</p>
      <ul class="quickly_li">
        <li v-for="(item,index) in quickly"
            :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="call">
      <p class="call_title">联系方式</p>
      <ul class="call_li">
        <li v-for="(item,index) in call"
            :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
      <div class="hot_line">
        <p class="hot_line_top">客户服务热线</p>
        <p class="hot_line_bot">400-618-9911</p>
      </div>
    </div>
    <div class="footer_logo">
      <img src="../images/stj_logo_footer.png"
           alt="">
    </div>
    <div class="bottom">
      <p>页面版权所有： 生态洁环保科技股份有限公司</p>
      <p>地址：山东省济南市莱芜区赢牟西大街003号</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFoot',
  data () {
    return {
      quickly: ['首页', '产品中心', '互联网+', '应用案例', '领导关怀', '新闻中心', '关于我们'],
      call: ['T. 0634-6270330', 'F. 0634-6270292', 'E. stj@chinastj.com']
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background: #2a2f2f;
  padding: 46px 140px 0 140px;
  > div {
    display: inline-block;
    vertical-align: top;
  }
  .quickly_title,
  .call_title {
    color: #b1b1b1;
    font-size: 16px;
  }
  .quickly_li,
  .call_li {
    a {
      color: #747c77 !important;
      font-size: 14px;
      line-height: 30px;
    }
  }
  .call {
    margin-left: 1em;
    a {
      font-size: 13px;
    }
  }
  .hot_line_top,
  .hot_line_bot {
    color: #747c77;
    font-size: 14px;
  }
  .hot_line {
    margin-top: 2em;
  }
  .hot_line_bot {
    font-size: 20px;
  }
  .footer_logo {
    float: right;
  }
  .bottom {
    display: block;
    padding: 13px 0;
    margin-top: 42px;
    p {
      color: #747c77;
      display: inline-block;
      font-size: 13px;
      &:first-of-type {
        border-right: 1px solid #747c77;
        padding-right: 50px;
      }
      &:last-of-type {
        padding-left: 50px;
      }
      @media screen and (max-width: 550px) {
        &:first-of-type {
          border-right: none;
          padding-right: 5px;
        }
        &:last-of-type {
          padding-left: 5px;
        }
      }
    }
  }
}
</style>