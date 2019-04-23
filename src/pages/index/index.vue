<template>
  <div class="home">
    <CommonHead />
    <Swiper />
    <div class="environment">
      <div class="row">
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12 thumbnail-envir">
          <div class="thumbnail">
            <!-- <img src="../../images/envir.png"
                 alt=""> -->
            <div class="caption">
              <p class="list-group-item-p">人居环境建设</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12 thumbnail-innocuity">
          <div class="thumbnail">
            <!-- <img src="../../images/innocuity.png"
                 alt=""> -->
            <div class="caption">
              <p class="list-group-item-p">无害化</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12 thumbnail-integration">
          <div class="thumbnail">
            <!-- <img src="../../images/integration.png"
                 alt=""> -->
            <div class="caption">
              <p class="list-group-item-p">厕所洗浴厨房一体化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro wrap"
         @click="blowimg">
      <!-- <img src="../../images/intro.png"
           alt=""
           class="img-responsive"> -->
      <div class="intro_text">
        <p class="intro_title">为农村厕所革命和生态文明建设做出贡献</p>
        <p>生态洁是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业</p>
        <p>专注产品研发近20年，在全国10多个省区累计使用超过100万套</p>
        <div class="instro-radius-div">
          <ul class="instro-radius-ul">
            <li class="instro-radius">
              <h4>ISO</h4>
              <p class="tix">体系认证</p>
              <p class="tix">
                <strong class="zl">3</strong>个</p>
            </li>
            <li class="instro-radius">
              <h4>50+</h4>
              <p class="zl">专利</p>
            </li>
            <li class="instro-radius">
              <p class="tix">核心技术</p>
              <p class="tix">列入国家</p>
              <p class="jh">
                <strong class="four">863</strong>计划</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row scheme">
      <div class="scheme-1">
        <div class="scheme-2 col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-12">
          <div class="thumbnail">
            <h2>产品中心</h2>
            <p class="top">农村户厕一体化生物处理建设</p>
            <p class="center">利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
            <router-link to="/product"
                         class="all">了解所有产品</router-link>
            <img src="../../images/product.png"
                 alt="">
          </div>
        </div>
        <div class="scheme-2 col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-12">
          <div class="thumbnail">
            <h2>互联网+智慧方案</h2>
            <p class="top">高效率、低成本管护运维</p>
            <p class="center">借助云计算、loT 物联网、大数据、智能运维 App、用户端智能家居 App 等前沿科技产品，数据双向互通，故障自动报警。</p>
            <router-link to="/net"
                         class="all">了解所有方案</router-link>
            <img src="../../images/fa.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid map">
      <h4>产品覆盖分布图</h4>
      <img src="../../images/map.png"
           alt=""
           class="img-responsive center-block">
      <div class="spure_div">
        <span class="spure"></span>
        <span class="spure_text">已安装的省份</span>
      </div>
    </div>
    <div class="container-fluid map container-fluid-map">
      <h4 class="news_title">新闻中心</h4>
      <div class="row examples">
        <div class="col-sm-6 col-md-6 col-xs-12 col-lg-6"
             v-for="(item,index) in examples"
             :key="index">
          <div class="thumbnail">
            <img :src="item.img"
                 @click="showimage(item.img)">
            <div class="caption">
              <p class="title"
                 @click="learn_detail(item)">{{item.title}}</p>
              <p class="detail">{{item.detail}}</p>
              <router-link :to="'/newsDetail?id='+item.id"
                           class="learn_detail"
                           @click="learn_detail(item)">了解详情</router-link>
            </div>
          </div>
        </div>
      </div>
      <p class="more_news_p">
        <router-link class="more_news"
                     to="/news">查看更多新闻</router-link>
      </p>
    </div>
    <div id="ShowImage_Form"
         class="modal">
      <div class="modal-body"
           @click="close">
        <div id="img_show"
             @click="close">
        </div>
      </div>
    </div>
    <div class="container container-bj">
      <div class="responsive-div">
        <div class="catch-btn catch-btn-left"
             @click="ic_left">
        </div>
        <div class="row">
          <div class="bottom_intro bottom_intro2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>褒奖</h4>
            <div class="bj">
              <div class="col-sm-4 col-lg-4 col-md-4 col-xs-6"
                   v-for="(item,index) in examples1"
                   :key="index">
                <div class="thumbnail thumbnail-bj"
                     @click="showimage(item.img)"
                     :style="'background:url('+item.img+') no-repeat center center/cover'">
                  <div class="caption">
                    <h5>{{item.text}}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="catch-btn catch-btn-right"
             @click="ic_right">
        </div>
      </div>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
import Swiper from '@/components/swiper'
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
  name: 'home',
  data () {
    return {
      examples: [
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/n1/n1.jpg'), id: 0, date: '2019-03-08', detail: '3月8日，四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇大井村的农村户厕一体化生物处理设备，公司讲解员向与会的领导、专家详细介绍了产品的工艺和性能。杨厅长对公司的产品提出了好评并希望这种产品能为四川省农村环境治理作出贡献，与会的领导、专家也对生态洁的一体化生物处理设备称赞不已。' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/n1/n2.jpg'), id: 1, date: '2019-10-09', detail: '2018年10月9日，全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间，农业农村部部长韩长赋到公司展位参观了公司产品并进行了指导。韩部长对生态洁公司的农村户厕一体化生物处理设备给予了充分肯定，赞扬公司产品将农村改厕和污水处理结合在一起，一步到位，是一种真正意义上的“厕所革命”好产品。' },
        { title: '住建部总工程师陈宜明参观公司产品', img: require('../../images/n1/n3.jpg'), id: 2, date: '2019-03-08', detail: '2018年10月13日，住建部总工程师陈宜明到第七届中国国际住宅产业暨建筑工业化产品与设备博览会生态洁公司展位参观。在公司展品旁，他详细了解了农村户厕一体化生物处理设备的工艺、运行、维护等情况，对农村改厕和一体化生物处理模式大加赞赏，希望生态洁公司再接再厉。继续为全国农村“厕所革命”做出更大的贡献。本次展会由住房和城乡建设部主办。' },
        { title: '山东省莱城市区领导观摩生态洁产品', img: require('../../images/n1/n4.jpg'), id: 3, date: '2019-03-08', detail: ' 2018年6月19日，莱芜市莱城区委书记马宝岭，区长秦蕾带领区五大班子以及区直部门及各乡镇领导观摩公司安装在口镇的农村户厕一体化生物处理设备。在口镇林家庄和栖龙湾村安装现场。马书记及各位领导详细询问了设备运行情况，并提出了指导意见。希望生态洁继续努力，为莱芜的农村厕改和污水治理工作作出持续贡献' }
      ],
      examples1: [],
      examples2: [
        { text: '低碳单位', img: require('../../images/ry/r10.jpg') },
        { text: '科技进步', img: require('../../images/ry/r11.jpg') },
        { text: '厕所大赛', img: require('../../images/ry/r12.jpg') },
        { text: '消费满意', img: require('../../images/ry/r13.jpg') },
        { text: '环保单位', img: require('../../images/ry/r14.jpg') },
        { text: '创业基地', img: require('../../images/ry/r15.jpg') }
      ],
      examples3: [
        { text: '高新技术企业', img: require('../../images/ry/r1.jpg') },
        { text: '院士工作站', img: require('../../images/ry/r2.jpg') },
        { text: '火炬计划重点高新技术企业', img: require('../../images/ry/r3.jpg') },
        { text: '中国驰名商标', img: require('../../images/ry/r4.jpg') },
        { text: '工人先锋号', img: require('../../images/ry/r5.jpg') },
        { text: '优秀科技品牌', img: require('../../images/ry/r6.jpg') }
      ],
      examples4: [
        { text: '山东名牌', img: require('../../images/ry/r7.jpg') },
        { text: '中国专利山东明星企业', img: require('../../images/ry/r8.jpg') },
        { text: '山东最具发展潜力民营企业', img: require('../../images/ry/r9.jpg') },
        { text: '污水推广证书', img: require('../../images/ry/r16.jpg') },
        { text: '中国专利山东明星企业证书', img: require('../../images/ry/r17.jpg') },
        { text: '生活污水处理设备的应用', img: require('../../images/ry/r18.jpg') }
      ]
    }
  },
  components: {
    CommonHead,
    CommonFoot,
    Swiper
  },
  created () {
    this.examples1 = this.examples2
  },
  methods: {
    ic_left () {
      if (this.examples1 === this.examples2) {
        this.examples1 = this.examples3
      } else if (this.examples1 === this.examples3) {
        this.examples1 = this.examples3
      } else if (this.examples1 === this.examples4) {
        this.examples1 = this.examples2
      }
    },
    ic_right () {
      if (this.examples1 === this.examples2) {
        this.examples1 = this.examples4
      } else if (this.examples2 === this.examples4) {
        this.examples1 = this.examples4
      } else if (this.examples1 === this.examples3) {
        this.examples1 = this.examples2
      }
    },
    blowimg () {
      console.log($('img.intro_img').zoomify())
      $('img.intro_img').zoomify();
    },
    learn_detail (news) {
      localStorage.setItem('news', JSON.stringify(news))
      this.$router.push('/newsDetail?id=' + news.id)
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .instro-radius {
    p {
      margin: 0 !important;
    }
    h4 {
      margin: 0 !important;
    }
  }
}
@media (max-width: 760px) {
  .scheme .scheme-1 {
    width: 100% !important;
    .col-sm-13 {
      padding-left: 30px !important;
    }
  }
  .swiper-container {
    width: 100%;
    height: 375px !important;
  }
  .environment .row .thumbnail-envir {
    min-width: 0 !important;
  }
  .thumbnail-envir {
    background: url('../../images/envir.png') no-repeat center center;
    background-size: cover;
    min-width: 0 !important;
    height: 160px;
  }
  .thumbnail-innocuity {
    background: url('../../images/innocuity.png') no-repeat center center;
    background-size: cover;
    min-width: 0 !important;
    height: 160px;
  }
  .thumbnail-integration {
    background: url('../../images/integration.png') no-repeat center center;
    background-size: cover;
    min-width: 0 !important;
    height: 160px;
  }
  .instro-radius {
    margin-left: 20px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .col-sm-13 .center {
    width: 90% !important;
  }
  .map .news_title {
    padding: 60px 0 30px 0 !important;
  }
  .container-bj .responsive-div {
    width: 100% !important;
  }
  .responsive-div .thumbnail {
    width: 100% !important;
    height: 100% !important;
    margin-left: 0 !important;
  }
  .col-sm-4,
  .col-lg-4,
  .col-md-4,
  .col-xs-6 {
    width: 457px !important;
  }
  .catch-btn {
    width: 32px !important;
    height: 32px !important;
  }
  .catch-btn-left {
    top: 220px !important;
    left: -30px !important;
    z-index: 10000;
    display: none;
  }
  .catch-btn-right {
    top: 220px !important;
    right: -30px !important;
    z-index: 10000;
    display: none;
  }
  .scheme-2 {
    width: 100% !important;
  }
  .scheme-1 {
    .col-sm-13 {
      h2 {
        font-size: 48px;
      }
      .top {
        font-size: 36px;
      }
      .center {
        font-size: 28px;
        width: 60% !important;
      }
      .all {
        font-size: 26px;
        margin-top: 69px;
      }
      img {
        margin-top: -230px;
      }
    }
  }
  .map {
    .examples {
      > div {
        padding-bottom: 0 !important;
      }
      .thumbnail {
        flex-wrap: wrap;
        img {
          width: 300px !important; /*no*/
          height: 194px !important; /*no*/
        }
        .caption {
          margin-left: 0 !important;
          .title {
            width: 100% !important;
            font-size: 32px !important;
            height: auto !important;
            line-height: normal !important;
            margin-top: 31px !important;
          }
          .detail {
            font-size: 24px !important;
          }
          .learn_detail {
            font-size: 22px !important;
          }
        }
      }
    }
    .more_news {
      font-size: 22px !important;
      padding: 17px 30px !important;
    }
  }
  .container-bj {
    // .row {
    //   padding-left: 30px !important;
    // }
    .thumbnail.thumbnail-bj {
      margin-left: 20px !important;
    }
    .col-sm-4,
    .col-lg-4,
    .col-md-4,
    .col-xs-6 {
      flex-shrink: 0;
      width: 457px !important;
      height: 290px !important;
      margin-left: 24px !important;
      &:first-of-type {
        margin-left: 0px !important;
      }
    }
  }
  .bj {
    width: 100%;
    height: 400px !important;
    display: flex;
    overflow: auto;
  }
  .responsive-div {
    .bottom_intro {
      padding: 0 !important;
    }
  }
  .map .examples > div {
    border-top: none !important;
  }
  .container-fluid-map {
    padding: 0 !important;
    padding-bottom: 100px !important;
  }
  .map .examples .thumbnail {
    padding: 38px 20px !important;
    img {
      width: 100% !important;
    }
  }
}
.environment .row {
  display: flex;
  padding: 0;
  .thumbnail-envir {
    background: url('../../images/envir.png') no-repeat center center;
    background-size: cover;
    min-width: 480px;
    height: 160px;
  }
  .thumbnail-innocuity {
    background: url('../../images/innocuity.png') no-repeat center center;
    background-size: cover;
    min-width: 480px;
    height: 160px;
  }
  .thumbnail-integration {
    background: url('../../images/integration.png') no-repeat center center;
    background-size: cover;
    min-width: 480px;
    height: 160px;
  }
  img {
    width: 100%;
  }
  .thumbnail {
    margin-bottom: 0;
  }
}
.catch-btn {
  width: 50px;
  height: 50px;
}
.catch-btn-left {
  position: absolute;
  top: 346px;
  left: -40px;
  background: url('../../images/ic_left.png') no-repeat center center/cover;
}
.catch-btn-right {
  background: url('../../images/ic_right.png') no-repeat center center/cover;
  position: absolute;
  top: 346px;
  right: -60px;
}
@media (max-width: 768px) {
  .catch-btn {
    width: 30px;
    height: 30px;
  }
  .container-bj {
    background: #ebf4f4;
    width: 100%;
    .responsive-div {
      width: 100%;
      margin: 51px auto 0;
      position: relative;
    }
  }
  .catch-btn-left {
    position: absolute;
    top: 346px;
    left: -40px;
    background: url('../../images/ic_left.png') no-repeat center center/cover;
  }
  .catch-btn-right {
    background: url('../../images/ic_right.png') no-repeat center center/cover;
    position: absolute;
    top: 346px;
    right: -60px;
  }
  .bottom_intro {
    // margin-left: 40px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .catch-btn {
    width: 50px;
    height: 50px;
  }
  .catch-btn-left {
    position: absolute;
    top: 346px;
    left: -60px;
    background: url('../../images/ic_left.png') no-repeat center center/cover;
  }
  .catch-btn-right {
    background: url('../../images/ic_right.png') no-repeat center center/cover;
    position: absolute;
    top: 346px;
    right: -80px;
  }
  .row.examples > div {
    padding-left: 10px;
  }
}
// @media (min-width: 1440px) {
//   .catch-btn-left {
//     position: absolute;
//     top: 406px;
//     // left: 184px;
//   }
//   .catch-btn-right {
//     position: absolute;
//     top: 406px;
//     // right: 184px;
//   }
// }
.container-bj {
  background: #ebf4f4;
  width: 100%;
  .responsive-div {
    width: 1220px;
    margin: 51px auto 0;
    position: relative;
  }
}
.bottom_intro {
  h4 {
    font-size: 30px;
    font-family: PingFangSC-Thin;
    color: #424644;
  }
  padding-bottom: 180px;
}
.list-group-item {
  display: inline-block;
  flex: 1;
  padding: 0;
  font-size: 0 !important;
  border: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.list-group {
  display: flex;
  margin-bottom: 0;
}
.intro {
  margin-top: 0;
  width: 100%;
  height: 702px;
  position: relative;
  pointer-events: auto;
  background: url('../../images/intro.png') no-repeat center center;
  background-position: auto 100%;
  background-size: cover;
  .intro_img {
    width: 100%;
  }
  .intro_text {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    padding-top: 1px; /*no*/
    p {
      color: #fff;
      // line-height: 3vw;
      font-size: 24px;
      font-family: PingFangSC-Thin;
    }
    .intro_title {
      font-size: 32px;
      margin-top: 120px;
      margin-bottom: 40px;
      font-family: PingFangSC-Semibold;
    }
  }
}
.scheme {
  background-image: linear-gradient(
    -180deg,
    #ebf4f4 0%,
    #ffffff 50%,
    #ebf4f4 100%
  );
  // height: 578px;
  padding-left: 79px;
  .scheme_left {
    background: url('../../images/product.png') no-repeat;
    background-size: contain;
  }
  .thumbnail {
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .scheme-1 {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
  }
  .scheme-2 {
    width: 600px;
    height: 100%;
  }
  @media (min-width: 1440px) {
    .scheme-2 {
      width: 600px;
      /* no */
      height: 100%;
      /* no */
    }
    img {
      margin-top: -88px !important;
      /* no */
    }
  }
  .all {
    position: relative;
    z-index: 9999999;
  }
}
.col-sm-13 {
  padding-left: 184px !important;
}
.thumbnail {
  padding: 0 !important;
  border: none;
  background: none;
}
.col-md-0 {
  padding: 0;
}
.row {
  margin: 0;
  padding: 0;
}
.list-group-item {
  position: relative;
}
.list-group-item-p {
  color: #fff;
  position: absolute;
  top: 52px;
  font-size: 28px;
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Regular;
}
.environment {
  .row {
    .col-sm-0 {
      padding: 0 !important;
    }
  }
}
.thumbnail .caption {
  padding: 0;
}
.instro-radius-div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.instro-radius-ul {
  width: 907px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 240px 0;
}
@media (min-width: 1440px) {
  .instro-radius-ul {
    width: 907px; /* no */
    margin: 80px 240px 0; /* no */
  }
}
.instro-radius {
  width: 172px;
  height: 172px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 20px 0;
  h4 {
    color: #fff;
    font-size: 46px;
  }
  .tix {
    font-size: 24px !important;
  }
  .zl {
    font-size: 32px !important;
  }
  .jh {
    font-size: 23px !important;
  }
  .four {
    font-size: 40px !important;
  }
}
.col-sm-13 {
  h2 {
    font-size: 30px;
    color: #1aa8aa;
    padding-top: 120px;
    margin-bottom: 35.5px;
  }
  .top {
    font-size: 22px;
    color: #3e403f;
    margin-bottom: 10px;
  }
  .center {
    font-size: 16px;
    color: #3e403f;
    width: 404px;
  }
  .all {
    float: left;
    color: #1aa8aa;
    font-size: 16px;
    margin-top: 38.1px;
  }
  img {
    display: inline;
    margin-top: -8vw;
  }
}
.container-fluid-map {
  padding: 0 56px;
}
.map {
  padding-bottom: 101px;
  h4 {
    font-family: PingFangSC-Thin;
    text-align: center;
    padding: 120px 0 102px 0;
    font-size: 32px;
  }
  .news_title {
    padding: 120px 0 80px 0;
  }
  .spure_div {
    float: left;
    margin-left: 140px;
  }
  .spure {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3dc4aa;
  }
  .spure_text {
    color: #303030;
    font-size: 18px;
    margin-left: 6px;
  }
  .thumbnail {
    display: flex;
    img {
      width: 300px;
      height: 190px;
      margin-right: 0;
      display: inline-block;
      cursor: url('../../images/big.png'), auto;
    }
    .learn_detail {
      font-size: 12px;
      color: #7a7e7c;
    }
    .detail {
      font-size: 14px;
      // height: 42px;
      overflow: hidden;
      color: #303030;
      display: -webkit-box;
      /* ! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .title {
      width: 100%;
      height: 52px;
      line-height: 26px;
      font-size: 18px;
      color: #303030;
      margin-top: 0.5vw;
      display: -webkit-box;
      /* ! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    @media (min-width: 1440px) {
      img {
        width: 300px; /* no */
        height: 190px; /* no */
      }
      .title {
        height: 52px; /* no */
        width: 235px;
        /* no */
      }
      .detail {
        width: 248px;
        /* no */
        height: 42px;
        /* no */
        line-height: 22px;
        /* no */
      }
    }
  }
  .examples {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    > div {
      margin-bottom: 37px; // padding-left: 96px;
      padding-bottom: 33px;
      border-bottom: 1px solid #ebebeb;
      &:first-of-type {
        padding-top: 38px;
        border-top: 1px solid #ebebeb;
      }
      .caption {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 32px;
      }
    }
    .thumbnail a > img,
    .thumbnail > img {
      margin-left: 0;
    }
    @media (min-width: 768px) {
      > div {
        &:first-of-type,
        &:nth-of-type(2) {
          padding-top: 38px;
          border-top: 1px solid #ebebeb;
        }
      }
    }
    @media (min-width: 1441px) {
      > div {
        box-sizing: border-box;
        width: 648px;
        /* no */
        margin-bottom: 37px; /* no */
        // padding-left: 96px; /* no */
        padding-bottom: 33px; /* no */
      }
    }
    .title {
      margin-bottom: 16px;
      cursor: pointer;
      &:hover {
        color: #1aa8aa;
      }
    }
    .detail {
      margin-bottom: 26px;
    }
  }
  @media (min-width: 1500px) and (max-width: 1920px) {
    .examples {
      padding: 38px 50px;
      /* no */
    }
  }
  @media (max-width: 1440px) {
    .examples {
      padding: 38px 30px;
      /* no */
    }
  }
  @media (min-width: 2000px) {
    .examples {
      padding: 38px 300px;
      /* no */
    }
  }
}
.col-md-6,
.col-lg-6,
.col-sm-6,
.col-xs-6 {
  padding: 0;
  margin: 0;
}
.more_news_p {
  text-align: center;
}
.more_news {
  border: 1px solid #ebebeb;
  font-size: 16px;
  color: #747c77;
  padding: 0.5vw 0.9vw;
  margin-top: 1.95vw;
}
.responsive-div {
  padding: 10px 0;
  box-sizing: border-box;
  .col-sm-4,
  .col-lg-4,
  .col-md-4,
  .col-xs-4 {
    padding: 0;
  }
  h4 {
    text-align: center;
    margin-bottom: 72px;
  }
  .thumbnail {
    width: 378px;
    height: 240px;
  }
  .thumbnail-bj {
    background-size: cover;
    border: 1px solid #e8e8e8 !important;
    cursor: url('../../images/big.png'), auto;
  }
  .thumbnail {
    // height: 30vh;
    position: relative;
    border: none;
    margin-bottom: 32px;
    margin-left: 20px;
    background-size: auto 100%;
    background-position: center;
  }
  img {
    width: 100%;
    height: auto;
    margin: 0;
  }
  .caption {
    position: absolute;
    height: 40px;
    display: flex;
    align-items: center;
    bottom: 0px;
    background: #f3fffd;
    opacity: 0.9;
    width: 100%;
    padding: 8px 0 7px 14px;
    h5 {
      color: #303030;
      font-family: PingFangSC-Regular;
      font-size: 18px;
    }
  }
  .more {
    font-size: 9px;
    font-size: 0.9rem;
    color: #747c77;
    text-align: center;
  }
}
</style>