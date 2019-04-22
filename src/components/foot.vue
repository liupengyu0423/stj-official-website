<template>
  <footer>
    <div class="quickly">
      <p class="quickly_title">快速通道</p>
      <ul class="quickly_li">
        <li v-for="(item,index) in quickly"
            :key="index">
          <a :href="'/#/'+item.tab_E">{{item.tab_C}}</a>
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
    <!-- <div class="footer_logo"> -->
    <img src="../images/stj_logo_footer.png"
         alt=""
         class="footer_logo img-responsive">
    <!-- </div> -->
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
      quickly: [{ tab_C: '首页', tab_E: 'index' },
      { tab_C: '产品中心', tab_E: 'product' },
      { tab_C: '互联网+', tab_E: 'net' },
      { tab_C: '应用案例', tab_E: 'expression' },
      { tab_C: '领导关怀', tab_E: 'leader' },
      { tab_C: '新闻中心', tab_E: 'news' },
      { tab_C: '关于我们', tab_E: 'about' }],
      call: ['T. 0634-6270330', 'F. 0634-6270292', 'E. stj@chinastj.com']
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  footer {
    padding: 20px 0px 0 40px !important;
  }
  footer .footer_logo {
    top: 50px !important;
    right: 40px !important;
  }
}
footer {
  width: 100%;
  background: #2a2f2f;
  padding: 46px 140px 0 140px;
  position: relative;
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
    margin-top: 28px;
    a {
      color: #747c77 !important;
      font-size: 14px;
      line-height: 30px;
      font-family: PingFangSC-Regular;
    }
  }
  .call {
    margin-left: 138px;
    a {
      font-size: 13px;
    }
  }
  @media (min-width: 1440px) {
    .call {
      margin-left: 138px; /* no */
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
    margin-top: 5px;
  }
  .footer_logo {
    width: 189px;
    height: 30px;
    position: absolute;
    top: 144px;
    right: 140px;
  }
  @media (min-width: 1440px) {
    .footer_logo {
      top: 144px; /* no */
      right: 240px; /* no */
    }
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