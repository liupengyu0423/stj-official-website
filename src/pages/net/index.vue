<template>
  <div class="net">
    <CommonHead />
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-">
        <img src="../../images/net1.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>IoT 终端设备
            </h4>
            <p class="top">每一台生态洁厕所，都是一台智能设备。</p>
            <p>与中科院计算所团队通力合作，自主设计研发「网关 + 子设备」的创新 IoT 物联网架构，数据双向互联互通，自动监测与上报故障，支持多种动态扩展传感器，支持固件 OTA 更新，完美实现低成本、高可靠性、高扩展性。</p>
          </div>
        </div>
      </div>
      <div class="col-lg- xi-col-lg-3">
        <img src="../../images/net3.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4 style="color:#303030">运维 APP
            </h4>
            <p class="top"
               style="color:#303030">每一台生态洁厕所，都是高效运维的典范。</p>
            <p style="color:#303030">生态洁 IoT 物联网终端设备与管理后台无缝衔接，每一次设备故障都会自动报警、创建售后工单，并自动分配给相关的运维人员，未来提供类似滴滴打车的抢单、派单模式，运维效率大大增加。</p>
          </div>
        </div>
      </div>
      <div class="col-lg- xi-col-lg-4">
        <img src="../../images/net4.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>智能家居 APP
            </h4>
            <p class="top">每一台生态洁厕所，都是用户的智能家居。</p>
            <p>每一位用户都可以下载生态洁 App，实时查看自家户厕的运转情况、售后服务进展、产品使用介绍、国家政策资讯等信息。</p>
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
      padding-top: 3vw;
      font-size: 32px;
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      margin-top: 33px;
      line-height: 40px;
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
    h4 {
      font-size: 32px;
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      margin-top: 31px;
      line-height: 40px;
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
      font-size: 32px;
      line-height: 49px;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      margin-top: 31px;
      line-height: 40px;
    }
  }
  .xi-col-lg-4 {
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
    h4 {
      font-size: 32px;
      line-height: 49px;
      color: #303030;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #303030;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      margin-top: 31px;
      line-height: 40px;
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
</style>