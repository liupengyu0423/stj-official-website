<template>
  <div class="net">
    <CommonHead />
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-">
        <img src="../../images/net1.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-4 col-md-6 col-sm-8 col-xs-12">
            <h4>互联网+ 智能厕所
            </h4>
            <p>借助云计算、IoT 物联网、大数据、智能运维 App、用户端智能家居 App 等前沿科技产品，让每一台生态洁环保厕所都插上科技的翅膀，数据双向互联互通，故障自动报警，售后工单自动派发，真正实现高效率、低成本的管护运维。</p>
          </div>
        </div>
      </div>
      <div class="col-lg- xi-col-lg-2">
        <img src="../../images/net2.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-8 col-xs-12"></div>
          <div class="row1 col-lg-6 col-md-6 col-sm-8 col-xs-12">
            <h4>IoT 终端设备
            </h4>
            <p class="top">
              <span>每一台生态洁厕所，</span>
              <span>都是一台智能设备。</span>
            </p>
            <p>与中科院计算所团队通力合作，自主设计研发「网关 + 子设备」的创新 IoT 物联网架构，数据双向互联互通，自动监测与上报故障，支持多种动态扩展传感器，支持固件 OTA 更新，完美实现低成本、高可靠性、高扩展性。</p>
          </div>
        </div>
      </div>
      <div class="col-lg- xi-col-lg-3">
        <img src="../../images/net3.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-4 col-md-6 col-sm-8 col-xs-12">
            <h4>运维 APP
            </h4>
            <p class="top">
              <span>每一台生态洁厕所，</span>
              <span>都是高效运维的典范。</span>
            </p>
            <p class="detail">生态洁 IoT 物联网终端设备与管理后台无缝衔接，每一次设备故障都会自动报警、创建售后工单，并自动分配给相关的运维人员，未来提供类似滴滴打车的抢单、派单模式，运维效率大大增加。</p>
          </div>
        </div>
      </div>
      <div class="col-lg- xi-col-lg-4">
        <img src="../../images/net4.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-8 col-xs-12"></div>
          <div class="row1 col-lg-6 col-md-6 col-sm-8 col-xs-12">
            <h4>智能家居 APP
            </h4>
            <p class="top">
              <span>每一台生态洁厕所，</span>
              <span>都是用户的智能家居。</span>
            </p>
            <p class="detail">每一位用户都可以下载生态洁 App，实时查看自家户厕的运转情况、售后服务进展、产品使用介绍、国家政策资讯等信息。</p>
          </div>
        </div>
      </div>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
export default {
  metaInfo: {
    title: '生态洁环保科技股份有限公司',
    meta: [
      {
        name: 'keywords',
        content: '生态洁环保科技股份有限公司'
      },
      {
        name: 'description',
        content: '生态洁环保科技股份有限公司'
      }
    ]
  },
  name: 'net',
  data () {
    return {

    }
  },
  created () {
    _gaq.push(['_trackEvent', 'jump', '互联网+', 'net+']);
  },
  methods: {

  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 760px) {
  .col-lg- img {
    display: none;
  }
  .net .xi-col-lg-.col-lg- .row {
    padding: 95px 0 0 20px !important;
    h4 {
      font-size: 18px; /*no*/
    }
  }
  .net .xi-col-lg-2 .row,
  .net .xi-col-lg-3 .row,
  .net .xi-col-lg-4 .row {
    padding: 70px 0 0 20px !important;
    h4 {
      font-size: 18px; /*no*/
    }
  }
  .net .xi-col-lg-2 .row .row1,
  .net .xi-col-lg-4 .row .row1 {
    width: 100% !important;
    padding-left: 40% !important;
    padding-right: 0 !important;
  }
  .net .xi-col-lg- .row .row1,
  .net .xi-col-lg-3 .row .row1 {
    width: 100% !important;
    padding-right: 40% !important;
    padding-left: 0 !important;
  }
  .net .xi-col-lg-.col-lg- p,
  .net .xi-col-lg-2.col-lg- p,
  .net .xi-col-lg-3.col-lg- p,
  .net .xi-col-lg-4.col-lg- p {
    line-height: 28px !important;
    // margin-top: 10px !important;
    font-size: 11px !important; /*no*/
  }
  .net .xi-col-lg-.col-lg- p {
    width: auto !important;
  }
  .net .xi-col-lg-.col-lg- h4 {
    padding-top: 0 !important;
  }
  .xi-col-lg- {
    padding: 95px 0 131px 24px; /*no*/
    background: url('../../images/net21.png') no-repeat;
    background-size: cover;
  }
  .xi-col-lg-2 {
    padding: 140px 24px 120px 0px; /*no*/
    background: url('../../images/net22.png') no-repeat;
    background-size: cover;
    .row .top {
      // padding-left: 55%;
      span {
        color: #ffffff;
        display: block;
        font-size: 11.5px !important; /*no*/
      }
    }
  }
  .xi-col-lg-3 {
    padding: 140px 0 114px 24px; /*no*/
    background: url('../../images/net23.png') no-repeat;
    background-size: cover;
    .row .top {
      span {
        color: #ffffff;
        display: block;
        font-size: 11.5px !important; /*no*/
      }
    }
    .row .detail {
      margin-top: 20px !important; /*no*/
      padding-right: 20% !important;
    }
  }
  .xi-col-lg-4 {
    padding: 140px 24px 114px 0px; /*no*/
    background: url('../../images/net24.png') no-repeat;
    background-size: cover;
    .row .top {
      span {
        color: #303030;
        display: block;
        font-size: 12px !important; /*no*/
      }
    }
    .row .detail {
      padding-left: 35%;
    }
  }
}
.net {
  .container-fluid {
    padding: 0;
    margin-right: 0;
  }
  .row {
    margin-right: 0;
    &:nth-of-type(1),
    &:nth-of-type(3) {
      padding-left: 20px;
    }
  }
  .xi-col-lg-.col-lg- {
    position: relative;
    img {
      width: 100%;
    }
    .row {
      position: absolute;
      top: 0;
      width: 100%;
      padding-left: 140px;
      padding-top: 168px;
    }
    h4 {
      padding-top: 1vw;
      font-size: 32px; /*no*/
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px; /*no*/
      margin-top: 33px;
      line-height: 40px;
      font-family: PingFangSC-Light;
      width: 525px; /*no*/
    }
  }
  .xi-col-lg-2 {
    position: relative;
    text-align: right;
    img {
      width: 100%;
    }
    .row {
      position: absolute;
      top: 0;
      width: 100%;
      padding-right: 140px;
      padding-top: 218px;
    }
    .row1 {
      padding-left: 80px;
    }
    h4 {
      font-size: 32px; /*no*/
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px; /*no*/
      margin-top: 31px;
      line-height: 40px;
      font-family: PingFangSC-Light;
      span {
        color: #ffffff;
        font-family: PingFangSC-Regular;
        font-size: 18px; /*no*/
      }
    }
    .top {
      margin-bottom: 40px;
    }
  }
  .xi-col-lg-3 {
    position: relative;
    img {
      width: 100%;
    }
    .row {
      position: absolute;
      top: 0;
      width: 100%;
      padding-left: 140px;
      padding-top: 218px;
    }
    h4 {
      font-size: 32px; /*no*/
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px; /*no*/
      margin-top: 31px;
      line-height: 40px;
      font-family: PingFangSC-Light;
      span {
        color: #ffffff;
        font-family: PingFangSC-Regular;
        font-size: 18px; /*no*/
      }
    }
  }
  .xi-col-lg-4 {
    position: relative;
    text-align: right;
    img {
      width: 100%;
    }
    .row1 {
      padding-left: 140px;
    }
    .row {
      position: absolute;
      top: 0;
      width: 100%;
      padding-right: 140px;
      padding-top: 218px;
    }
    h4 {
      font-size: 32px; /*no*/
      line-height: 49px;
      color: #303030;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #303030;
      font-family: PingFangSC-Regular;
      font-size: 16px; /*no*/
      margin-top: 31px;
      line-height: 40px;
      font-family: PingFangSC-Light;
      span {
        color: #303030;
        font-family: PingFangSC-Regular;
        font-size: 18px; /*no*/
      }
    }
    .top {
      margin-top: 31px;
      margin-bottom: 40px;
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  // .row1,
  // .row3 {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  .row2,
  .row4 {
    position: absolute;
    top: 0;
    right: 0;
  }
  .row4 {
    h4,
    p {
      color: #303030;
    }
  }
  .container-fluid {
    position: relative;
  }
  h4 {
    font-size: 16px;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 9px;
    line-height: 16px;
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  .net .xi-col-lg-.col-lg- .row {
    padding-top: 100px !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .net .xi-col-lg-.col-lg- .row {
    padding: 40px 0 0 50px !important; /*no*/
  }
  .net .xi-col-lg-2 .row,
  .net .xi-col-lg-3 .row,
  .net .xi-col-lg-4 .row {
    padding: 80px 0 0 50px !important; /*no*/
  }
  .net .xi-col-lg-2 .row .row1,
  .net .xi-col-lg-4 .row .row1 {
    width: 100% !important;
    padding-left: 50% !important;
  }
  .top {
    span {
      font-size: 24px !important; /*no*/
    }
  }
  .net .xi-col-lg- .row .row1,
  .net .xi-col-lg-3 .row .row1 {
    width: 100% !important;
    padding-right: 50% !important;
  }
  .net .xi-col-lg-.col-lg- h4,
  .net .xi-col-lg-2 h4,
  .net .xi-col-lg-3 h4,
  .net .xi-col-lg-4 h4 {
    font-size: 36px !important; /*no*/
  }
  .net .xi-col-lg-.col-lg- p,
  .net .xi-col-lg-2 p,
  .net .xi-col-lg-3 p,
  .net .xi-col-lg-4 p {
    font-size: 22px !important; /*no*/
    line-height: 37px !important; /*no*/
  }
  .net .xi-col-lg-.col-lg- p {
    width: auto;
  }
}
@media (min-width: 768px) and (max-width: 800px) {
  .net .xi-col-lg-.col-lg- p {
    width: auto;
  }
  .net .xi-col-lg-.col-lg- .row {
    padding: 20px 0 0 50px !important; /*no*/
  }
  .net .xi-col-lg-.col-lg- h4,
  .net .xi-col-lg-2 h4,
  .net .xi-col-lg-3 h4,
  .net .xi-col-lg-4 h4 {
    font-size: 28px !important; /*no*/
  }
  .net .xi-col-lg-.col-lg- p,
  .net .xi-col-lg-2 p,
  .net .xi-col-lg-3 p,
  .net .xi-col-lg-4 p {
    font-size: 18px !important; /*no*/
    line-height: 28px !important; /*no*/
  }
  .top {
    span {
      font-size: 18px !important; /*no*/
    }
  }
}
</style>